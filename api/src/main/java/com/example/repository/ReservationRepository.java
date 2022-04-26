package com.example.repository;

import com.example.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    /*@Query("from Reservation r where r.idUser = :id")
    Reservation findByUserId(@Param("id") Integer id);

    @Query("Reservation r where r.idAnnounce = :id")
    Reservation findByAnnounceId(@Param("id") Integer id);*/
}
