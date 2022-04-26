package com.example.services;

import com.example.model.Announce;
import com.example.repository.AnnounceRepository;
import com.example.services.coverter.AnnounceConverter;
import com.example.services.coverter.EntityDtoConverter;
import com.example.services.dto.AnnounceDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Objects;

@Service
public class AnnounceService extends GenericCrudService<Announce,AnnounceDTO,Integer> {
    public AnnounceService(AnnounceRepository repository, AnnounceConverter converter) {
        super(repository, converter);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public AnnounceDTO update(AnnounceDTO announceDTO, Integer id) {
        Announce announce = this.repository.getById(id);
        if(Objects.equals(announce.getId(),id)) {
            announce = this.converter.dtoToEntity(announceDTO);
            announce = this.repository.save(announce);
            return this.converter.entityToDto(announce);
        }
        return null;
    }
}
