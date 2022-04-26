package com.example.services.coverter;

import com.example.model.Reservation;
import com.example.services.dto.ReservationDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ReservationConverter implements EntityDtoConverter<Reservation, ReservationDTO> {
    @Override
    public Reservation dtoToEntity(ReservationDTO reservationDTO) {
        return new Reservation(reservationDTO.getId(), reservationDTO.getIdUser(), reservationDTO.getIdAnnounce(), reservationDTO.getStartDate(), reservationDTO.getEndDate(), reservationDTO.getIsAccepted());
    }
    @Override
    public ReservationDTO entityToDto(Reservation reservation) {
        ReservationDTO reservationDTO = new ReservationDTO();
        BeanUtils.copyProperties(reservation, reservationDTO);
        return reservationDTO;
    }

    @Override
    public List<ReservationDTO> listEntityToListDto(List<Reservation> reservations) {
        List<ReservationDTO> reservationDTOS = new ArrayList<>();
        for (Reservation reservation : reservations) {
            reservationDTOS.add(entityToDto(reservation));
        }
        return reservationDTOS;
    }

    @Override
    public List<Reservation> listDtoToListEntity(List<ReservationDTO> reservationDTOS) {
        List<Reservation> reservations = new ArrayList<>();
        for (ReservationDTO reservationDTO : reservationDTOS) {
            reservations.add(dtoToEntity(reservationDTO));
        }
        return reservations;
    }
}
