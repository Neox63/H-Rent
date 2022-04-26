package com.example.model;

import javax.persistence.*;

@Entity
@Table
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    @Column
    private String location;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "DocumentType_id", referencedColumnName = "DocumentType.id")
    @Column
    private Integer idDocumentType;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "User_id", referencedColumnName = "id")
    @Column
    private Integer idUser;

    public Document() {
    }

    public Document(Integer id, String location, Integer idDocumentType, Integer idUser) {
        this.id = id;
        this.location = location;
        this.idDocumentType = idDocumentType;
        this.idUser = idUser;
    }

    public Integer getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public Integer getIdDocumentType() {
        return idDocumentType;
    }

    public Integer getIdUser() {
        return idUser;
    }
}
