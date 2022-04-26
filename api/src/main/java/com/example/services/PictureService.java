package com.example.services;

import com.example.model.DocumentType;
import com.example.model.Picture;
import com.example.repository.PictureRepository;
import com.example.services.coverter.EntityDtoConverter;
import com.example.services.coverter.PictureConverter;
import com.example.services.dto.DocumentTypeDTO;
import com.example.services.dto.PictureDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class PictureService extends GenericCrudService<Picture, PictureDTO,Integer>{
    public PictureService(PictureRepository repository, PictureConverter converter) {
        super(repository, converter);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    PictureDTO update(PictureDTO pictureDTO, Integer id) {
        Picture picture = this.repository.getById(id);
        if(Objects.equals(picture.getId(),id)) {
            picture = this.converter.dtoToEntity(pictureDTO);
            picture = this.repository.save(picture);
            return this.converter.entityToDto(picture);
        }
        return null;
    }
}
