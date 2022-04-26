package com.example.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private Date registeredAt;

    @Column
    private String city;

    @Column
    private String country;

    @Column
    private String zipCode;

    @Column
    private String street;

    @Column
    private String phone;

    @Column
    private String password;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "Document_id", referencedColumnName = "id")
    @Column
    private Integer idDocument;

    public User() {
    }

    public User(Integer id, String firstName, String lastName, String email, Date registeredAt, String city, String country, String zipCode, String street, String phone, Integer idDocument,String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.registeredAt = registeredAt;
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
        this.street = street;
        this.phone = phone;
        this.idDocument = idDocument;
        this.password=password;
    }

    public Integer getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Date getRegisteredAt() {
        return registeredAt;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getStreet() {
        return street;
    }

    public String getPhone() {
        return phone;
    }

    public Integer getIdDocument() {
        return idDocument;
    }

    public String getPassword() {
        return password;
    }

}
