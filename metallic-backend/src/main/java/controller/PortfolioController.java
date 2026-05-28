package com.zoro.controller;

import com.zoro.entity.Contact;
import com.zoro.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PortfolioController {

    @Autowired
    private ContactService service;

    @GetMapping("/health")
    public String health() {
        return "Backend Running";
    }

    @PostMapping("/contact")
    public Contact save(@RequestBody Contact contact) {
        return service.save(contact);
    }
}
