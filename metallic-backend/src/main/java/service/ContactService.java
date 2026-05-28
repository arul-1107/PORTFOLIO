package com.zoro.service;

import com.zoro.entity.Contact;
import com.zoro.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    public Contact save(Contact contact) {
        return repository.save(contact);
    }
}
