package com.example.services.coverter;

import com.example.model.Announce;
import com.example.services.dto.AnnounceDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.beans.Beans;
import java.util.ArrayList;
import java.util.List;

@Component
public class AnnounceConverter implements EntityDtoConverter<Announce, AnnounceDTO> {
    @Override
    public Announce dtoToEntity(AnnounceDTO announceDTO) {
        return new Announce(announceDTO.getId(), announceDTO.getTitle(), announceDTO.getDescription(), announceDTO.getPostalCode(), announceDTO.getCity(), announceDTO.getCountry(), announceDTO.getPrice(),announceDTO.getCaution());
    }

    @Override
    public AnnounceDTO entityToDto(Announce announce) {
        AnnounceDTO announceDTO = new AnnounceDTO();
        BeanUtils.copyProperties(announce, announceDTO);
        return announceDTO;
    }

    @Override
    public List<AnnounceDTO> listEntityToListDto(List<Announce> announces) {
        List<AnnounceDTO> announceDTOS = new ArrayList<>();
        for (Announce announce : announces) {
            announceDTOS.add(entityToDto(announce));
        }
        return announceDTOS;
    }

    @Override
    public List<Announce> listDtoToListEntity(List<AnnounceDTO> announceDTOS) {
        List<Announce> announces = new ArrayList<>();
        for (AnnounceDTO announceDTO : announceDTOS) {
            announces.add(dtoToEntity(announceDTO));
        }
        return announces;
    }
}
