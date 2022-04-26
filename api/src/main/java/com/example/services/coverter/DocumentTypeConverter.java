package com.example.services.coverter;

import com.example.model.DocumentType;
import com.example.services.dto.DocumentTypeDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DocumentTypeConverter implements EntityDtoConverter<DocumentType, DocumentTypeDTO> {
    @Override
    public DocumentType dtoToEntity(DocumentTypeDTO documentTypeDTO) {
        return new DocumentType(documentTypeDTO.getId(), documentTypeDTO.getName());
    }

    @Override
    public DocumentTypeDTO entityToDto(DocumentType documentType) {
        DocumentTypeDTO documentTypeDTO = new DocumentTypeDTO();
        BeanUtils.copyProperties(documentType, documentTypeDTO);
        return documentTypeDTO;
    }

    @Override
    public List<DocumentTypeDTO> listEntityToListDto(List<DocumentType> documentTypes) {
        List<DocumentTypeDTO> documentTypeDTOS = new ArrayList<>();
        for (DocumentType documentType : documentTypes) {
            documentTypeDTOS.add(this.entityToDto(documentType));
        }
        return documentTypeDTOS;
    }

    @Override
    public List<DocumentType> listDtoToListEntity(List<DocumentTypeDTO> documentTypeDTOS) {
        List<DocumentType> documentTypes = new ArrayList<>();
        for (DocumentTypeDTO documentTypeDTO : documentTypeDTOS) {
            documentTypes.add(this.dtoToEntity(documentTypeDTO));
        }
        return documentTypes;
    }
}
