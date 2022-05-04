package com.example.services.dto;

import javax.persistence.Column;

public class DocumentTypeDTO {
    private Integer id;
    private String name;

    public DocumentTypeDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
