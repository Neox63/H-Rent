package com.example.controllers;

import com.example.model.Announce;
import com.example.services.AnnounceService;
import com.example.services.coverter.AnnounceConverter;
import com.example.services.dto.AnnounceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;
import java.util.List;

@RestController
public class AnnounceController {

    @Autowired
    private AnnounceService announceService;

    @Autowired
    private AnnounceConverter announceConverter;

    @RequestMapping(value = "/api/announces", method = RequestMethod.GET)
    public List<Announce> getAnnounces() {
        return announceConverter.listDtoToListEntity(announceService.findAll());
    }

    @RequestMapping(value = "/api/announce/{id}", method = RequestMethod.GET)
    public AnnounceDTO findAnnounceById(@PathVariable("id") Integer id) {
        return announceService.findOneById(id);
    }

    @RequestMapping(value = "/api/announce/{id}", method = RequestMethod.DELETE)
    public void deleteAnnounceById(@PathVariable("id") Integer id) {
        announceService.deleteById(id);
    }

    @RequestMapping(value = "/api/announce/create", method = RequestMethod.POST)
    public HttpStatus createAnnounce(@Param("title") String title,
                                      @Param("description") String description,
                                      @Param("price") Double price,
                                      @Param("country") String country,
                                      @Param("caution") Double caution,
                                      @Param("postalCode") String postalCode,
                                      @Param("city") String city) {
        AnnounceDTO announceDTO = new AnnounceDTO();
        if(title != null && description != null && price != null && country != null && caution != null && postalCode != null && city != null) {
            announceDTO.setTitle(title);
            announceDTO.setDescription(description);
            announceDTO.setPrice(price);
            announceDTO.setCountry(country);
            announceDTO.setCaution(caution);
            announceDTO.setPostalCode(postalCode);
            announceDTO.setCity(city);
            announceService.create(announceDTO);
            return HttpStatus.OK;
        }
        else {
            return HttpStatus.BAD_REQUEST;
        }
    }
    @RequestMapping(value = "/api/announce/{id}", method = RequestMethod.PUT)
    public AnnounceDTO updateAnnounce(@Param("id") Integer id,
                                      @Param("title") String title,
                                      @Param("description") String description,
                                      @Param("price") Double price,
                                      @Param("country") String country,
                                      @Param("caution") Double caution,
                                      @Param("postalCode") String postalCode,
                                      @Param("city") String city) {
        AnnounceDTO announceDTO = new AnnounceDTO();
        announceDTO.setId(id);
        announceDTO.setTitle(title);
        announceDTO.setDescription(description);
        announceDTO.setPrice(price);
        announceDTO.setCountry(country);
        announceDTO.setCaution(caution);
        announceDTO.setPostalCode(postalCode);
        announceDTO.setCity(city);
        return announceService.update(announceDTO, id);
    }
    @RequestMapping(value = "/api/announce/delete/{id}", method = RequestMethod.DELETE)
    public void deleteAnnounce(@PathVariable("id") Integer id) {
        announceService.deleteById(id);
    }
}
