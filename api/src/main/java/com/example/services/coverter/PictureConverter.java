package com.example.services.coverter;

import com.example.model.Picture;
import com.example.services.dto.PictureDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PictureConverter implements EntityDtoConverter<Picture, PictureDTO> {
    @Override
    public Picture dtoToEntity(PictureDTO pictureDTO) {
        return new Picture(pictureDTO.getId(), pictureDTO.getLocation(), pictureDTO.getIdAnnounce());
    }

    @Override
    public PictureDTO entityToDto(Picture picture) {
        PictureDTO pictureDTO = new PictureDTO();
        BeanUtils.copyProperties(picture, pictureDTO);
        return pictureDTO;
    }

    @Override
    public List<PictureDTO> listEntityToListDto(List<Picture> pictures) {
        List<PictureDTO> pictureDTOS = new ArrayList<>();
        for (Picture picture : pictures) {
            pictureDTOS.add(entityToDto(picture));
        }
        return pictureDTOS;
    }

    @Override
    public List<Picture> listDtoToListEntity(List<PictureDTO> pictureDTOS) {
        List<Picture> pictures = new ArrayList<>();
        for (PictureDTO pictureDTO : pictureDTOS) {
            pictures.add(dtoToEntity(pictureDTO));
        }
        return pictures;
    }
}
