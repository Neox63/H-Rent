package com.example.repository;

import com.example.model.DocumentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentTypeRepository extends JpaRepository<DocumentType,Integer> {
}
