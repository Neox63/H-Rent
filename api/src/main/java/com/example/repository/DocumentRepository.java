package com.example.repository;

import com.example.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Integer> {
    //@Query("FROM Document d WHERE d.location = :location")
    //List<Document> findByLocation(@Param("name") String location);
}