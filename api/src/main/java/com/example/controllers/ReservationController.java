package com.example.controllers;

import com.example.model.Reservation;
import com.example.repository.AnnounceRepository;
import com.example.repository.ReservationRepository;
import com.example.repository.UserRepository;
import com.example.services.AnnounceService;
import com.example.services.ReservationService;
import com.example.services.UserService;
import com.example.services.dto.AnnounceDTO;
import com.example.services.dto.ReservationDTO;
import com.example.services.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class ReservationController {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ReservationService reservationService;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AnnounceService announceService;
    @Autowired
    private AnnounceRepository announceRepository;

    @RequestMapping(value = "/api/reservations", method = RequestMethod.GET)
    public List<ReservationDTO> getReservations() {
        return reservationService.findAll();
    }

    @RequestMapping(value = "/api/reservation/{id}", method = RequestMethod.GET)
    public ReservationDTO getReservation(@PathVariable("id") Integer id) {
        return reservationService.findOneById(id);
    }

    @RequestMapping(value = "/api/reservation/delete/{id}", method = RequestMethod.DELETE)
    public void deleteReservation(@PathVariable("id") Integer id) {
        reservationService.deleteById(id);
    }

    @RequestMapping(value = "/api/reservation/create", method = RequestMethod.POST)
    public ReservationDTO createReservation(@Param("idUser") Integer idUser,
                                            @Param("idAnnounce") Integer idAnnounce,
                                            @Param("startDate") Date startDate,
                                            @Param("endDate") Date endDate,
                                            @Param("isAccepted") Boolean isAccepted) {
        if(idUser != null && idAnnounce != null && startDate != null && endDate != null && isAccepted != null) {
            if(!userRepository.findById(idUser).isEmpty() && !announceRepository.findById(idAnnounce).isEmpty()) {
                ReservationDTO reservationDTO = new ReservationDTO();
                reservationDTO.setIdUser(idUser);
                reservationDTO.setIdAnnounce(idAnnounce);
                reservationDTO.setStartDate(startDate);
                reservationDTO.setEndDate(endDate);
                reservationDTO.setIsAccepted(isAccepted);
                reservationService.create(reservationDTO);
                return reservationDTO;
           }
        }
        return null;
    }
    @RequestMapping(value = "/api/reservation/update/{id}", method = RequestMethod.PUT)
    public ReservationDTO updateReservation(@PathVariable("id") Integer id,
                                            @Param("idUser") Integer idUser,
                                            @Param("idAnnounce") Integer idAnnounce,
                                            @Param("startDate") Date startDate,
                                            @Param("endDate") Date endDate,
                                            @Param("isAccepted") Boolean isAccepted) {
        if(idUser != null && idAnnounce != null && startDate != null && endDate != null && isAccepted != null) {
            if(!userRepository.findById(idUser).isEmpty() && !announceRepository.findById(idAnnounce).isEmpty()) {
                ReservationDTO reservationDTO = new ReservationDTO();
                reservationDTO.setId(id);
                reservationDTO.setIdUser(idUser);
                reservationDTO.setIdAnnounce(idAnnounce);
                reservationDTO.setStartDate(startDate);
                reservationDTO.setEndDate(endDate);
                reservationDTO.setIsAccepted(isAccepted);
                reservationService.update(reservationDTO,id);
                return reservationDTO;
            }
        }
        return null;
    }
}
