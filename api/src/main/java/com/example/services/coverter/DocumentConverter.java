package com.example.services.coverter;

import com.example.model.Document;
import com.example.services.dto.DocumentDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DocumentConverter implements EntityDtoConverter<Document, DocumentDTO> {
    @Override
    public Document dtoToEntity(DocumentDTO documentDTO) {
        return new Document(documentDTO.getId(), documentDTO.getLocation(), documentDTO.getIdDocumentType(), documentDTO.getIdUser());
    }

    @Override
    public DocumentDTO entityToDto(Document document) {
        DocumentDTO documentDTO = new DocumentDTO();
        BeanUtils.copyProperties(document, documentDTO);
        return documentDTO;
    }

    @Override
    public List<DocumentDTO> listEntityToListDto(List<Document> documents) {
        List<DocumentDTO> documentDTOS = new ArrayList<>();
        for (Document document : documents) {
            documentDTOS.add(entityToDto(document));
        }
        return documentDTOS;
    }

    @Override
    public List<Document> listDtoToListEntity(List<DocumentDTO> documentDTOS) {
        List<Document> documents = new ArrayList<>();
        for (DocumentDTO documentDTO : documentDTOS) {
            documents.add(dtoToEntity(documentDTO));
        }
        return documents;
    }
}
