package com.example.model;

import javax.persistence.*;

@Entity
@Table
public class DocumentType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    @Column
    private String name;

    public DocumentType() {
    }

    public DocumentType(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
