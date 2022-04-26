package com.example.repository;

import com.example.model.Announce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnounceRepository extends JpaRepository<Announce,Integer> {
    List<Announce> findByTitle(String title);
    List<Announce> findByTitleLike(String title);
    List<Announce> findByPostalCode(String postalCode);
}
