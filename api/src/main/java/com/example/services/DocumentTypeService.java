package com.example.services;

import com.example.model.DocumentType;
import com.example.repository.DocumentTypeRepository;
import com.example.services.coverter.DocumentTypeConverter;
import com.example.services.coverter.EntityDtoConverter;
import com.example.services.dto.DocumentTypeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class DocumentTypeService extends GenericCrudService<DocumentType, DocumentTypeDTO,Integer> {
    public DocumentTypeService(DocumentTypeRepository repository, DocumentTypeConverter converter) {
        super(repository, converter);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    DocumentTypeDTO update(DocumentTypeDTO documentTypeDTO, Integer id) {
        DocumentType documentType = this.repository.getById(id);
        if(Objects.equals(documentType.getId(),id)) {
            documentType = this.converter.dtoToEntity(documentTypeDTO);
            documentType = this.repository.save(documentType);
            return this.converter.entityToDto(documentType);
        }
        return null;
    }
}
