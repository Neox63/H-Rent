package com.example.services;

import com.example.services.coverter.EntityDtoConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

public abstract class GenericCrudService<ENTITY,DTO,ID> {
    protected JpaRepository<ENTITY,ID> repository;
    protected EntityDtoConverter<ENTITY,DTO> converter;

    public GenericCrudService(JpaRepository<ENTITY, ID> repository, EntityDtoConverter<ENTITY, DTO> converter) {
        this.repository = repository;
        this.converter = converter;
    }

    @Transactional(readOnly = true)
    public List<DTO> findAll() {
        return this.converter.listEntityToListDto(repository.findAll());
    }

    public DTO findOneById(ID id) {
        return this.converter.entityToDto(repository.findById(id).get());
    }

    public void deleteById(ID id) {
        this.repository.deleteById(id);
    }

    abstract DTO update(DTO dto,ID id);

    public DTO create(DTO dto) {
        ENTITY entity = converter.dtoToEntity(dto);
        entity = repository.save(entity);
        return converter.entityToDto(entity);
    }
}
