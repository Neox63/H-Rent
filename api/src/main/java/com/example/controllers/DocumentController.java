package com.example.controllers;

import com.example.payload.UploadFileResponse;
import com.example.repository.DocumentRepository;
import com.example.repository.UserRepository;
import com.example.services.DocumentService;
import com.example.services.FileStorageService;
import com.example.services.dto.DocumentDTO;
import com.example.services.dto.PictureDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

@RestController
public class DocumentController {
    @Autowired
    private DocumentRepository documentRepository;
    @Autowired
    private DocumentService documentService;
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    private UserRepository userRepository;


    @RequestMapping(value = "/api/documents", method = RequestMethod.GET)
    public List<DocumentDTO> getDocument() {
        return documentService.findAll();
    }

    @RequestMapping(value = "/api/document/{id}", method = RequestMethod.GET)
    public DocumentDTO getDocument(@PathVariable("id") Integer id) {
        return documentService.findOneById(id);
    }

    @RequestMapping(value = "/api/document/delete/{id}", method = RequestMethod.DELETE)
    public void deleteDocument(@PathVariable("id") Integer id) {
        documentService.deleteById(id);
    }


    @RequestMapping(value = "/api/document/add", method = RequestMethod.POST)
    public UploadFileResponse addDocument(@Param("idDocumentType") Integer idDocumentType,
                                         @Param("idUser") Integer idUser,
                                         @RequestParam("file") MultipartFile file) {
        if(idDocumentType != null && file != null && idUser != null && !userRepository.findById(idUser).isEmpty()) {
            String fileName = fileStorageService.storeFile(file);

            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/downloadFile/")
                    .path(fileName)
                    .toUriString();

            DocumentDTO documentDTO = new DocumentDTO();
            documentDTO.setIdUser(idUser);
            documentDTO.setIdDocumentType(idDocumentType);
            documentDTO.setLocation(fileDownloadUri);
            documentService.create(documentDTO);

            return new UploadFileResponse(fileName, fileDownloadUri,
                    file.getContentType(), file.getSize());
        }
        return new UploadFileResponse("", "", "", 0);
    }
}
