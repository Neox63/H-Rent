package com.example.services;

import com.example.model.DocumentType;
import com.example.model.Reservation;
import com.example.repository.ReservationRepository;
import com.example.services.coverter.EntityDtoConverter;
import com.example.services.coverter.ReservationConverter;
import com.example.services.dto.DocumentTypeDTO;
import com.example.services.dto.ReservationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class ReservationService extends GenericCrudService<Reservation, ReservationDTO,Integer> {
    public ReservationService(ReservationRepository repository, ReservationConverter converter) {
        super(repository, converter);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    public ReservationDTO update(ReservationDTO reservationDTO, Integer id) {
        Reservation reservation = this.repository.getById(id);
        if(Objects.equals(reservation.getId(),id)) {
            reservation = this.converter.dtoToEntity(reservationDTO);
            reservation = this.repository.save(reservation);
            return this.converter.entityToDto(reservation);
        }
        return null;
    }
}
