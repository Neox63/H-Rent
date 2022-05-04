package com.example.services;

import com.example.model.Document;
import com.example.repository.DocumentRepository;
import com.example.services.coverter.DocumentConverter;
import com.example.services.dto.DocumentDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class DocumentService extends GenericCrudService<Document, DocumentDTO,Integer> {
    public DocumentService(DocumentRepository repository, DocumentConverter converter) {
        super(repository, converter);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    DocumentDTO update(DocumentDTO documentDTO, Integer id) {
        Document document = this.repository.getById(id);
        if(Objects.equals(document.getId(),id)) {
            document = this.converter.dtoToEntity(documentDTO);
            document = this.repository.save(document);
            return this.converter.entityToDto(document);
        }
        return null;
    }
}
