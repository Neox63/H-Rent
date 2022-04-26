package com.example.services.coverter;
import java.util.List;

public interface EntityDtoConverter<ENTITY,DTO> {
    ENTITY dtoToEntity(DTO dto);
    DTO entityToDto(ENTITY entity);
    List<DTO> listEntityToListDto(List<ENTITY> entities);
    List<ENTITY> listDtoToListEntity(List<DTO> dtos);
}
