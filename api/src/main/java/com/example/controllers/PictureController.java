package com.example.controllers;

import com.example.payload.UploadFileResponse;
import com.example.repository.PictureRepository;
import com.example.services.FileStorageService;
import com.example.services.PictureService;
import com.example.services.dto.PictureDTO;
import net.bytebuddy.utility.RandomString;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@RestController
public class PictureController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    private PictureRepository pictureRepository;
    @Autowired
    private PictureService pictureService;

    @RequestMapping(value = "/api/pictures", method = RequestMethod.GET)
    public List<PictureDTO> getPictures() {
        return pictureService.findAll();
    }

    @RequestMapping(value = "/api/picture/{id}", method = RequestMethod.GET)
    public PictureDTO getPicture(@PathVariable("id") Integer id) {
        return pictureService.findOneById(id);
    }

    @RequestMapping(value = "/api/picture/delete/{id}", method = RequestMethod.DELETE)
    public void deletePicture(@PathVariable("id") Integer id) {
        pictureService.deleteById(id);
    }

    @RequestMapping(value = "/api/picture/add", method = RequestMethod.POST)
    public UploadFileResponse addPicture(@Param("idAnnounce") Integer idAnnounce,
                                 @RequestParam("file") MultipartFile file) {
        if(idAnnounce != null && file != null) {
            String fileName = fileStorageService.storeFile(file);

            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/downloadFile/")
                    .path(fileName)
                    .toUriString();

            PictureDTO pictureDTO = new PictureDTO();
            pictureDTO.setIdAnnounce(idAnnounce);
            pictureDTO.setLocation(fileDownloadUri);
            pictureService.create(pictureDTO);

            return new UploadFileResponse(fileName, fileDownloadUri,
                    file.getContentType(), file.getSize());
        }
        return new UploadFileResponse("", "", "", 0);
    }
}
