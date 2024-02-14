package com.party.suriya.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.party.suriya.dto.request.EventRequest;
import com.party.suriya.dto.response.EventResponse;
import com.party.suriya.model.Event;
import com.party.suriya.Service.EventService;

import lombok.RequiredArgsConstructor;

import java.util.List;
@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {
    private final EventService eventservice;
    @PostMapping("/post")
    public ResponseEntity<EventResponse> createEvent(EventRequest request){
        EventResponse res=new EventResponse();
        try{
            res=eventservice.createEvent(request);
            return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            res.setMessage("Something wrong");
            return new ResponseEntity<>(res,HttpStatus.EXPECTATION_FAILED);
        }

    }
    @GetMapping("/get")
    public ResponseEntity<List<Event>> getAllEvents(){
        List<Event> event=eventservice.getAllEvents();
        return new ResponseEntity<>(event,HttpStatus.OK);
    }
    @PutMapping("/put/{Id}")
    public ResponseEntity<EventResponse> updateEvent(@PathVariable Long Id, @RequestBody EventRequest request) {
        EventResponse res = new EventResponse();
        try {
            res = eventservice.updateEvent(Id, request);
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            res.setMessage("OOPs,Something wrong");
            return new ResponseEntity<>(res, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete/{Id}")
    public ResponseEntity<EventResponse> deleteEvent(@PathVariable Long Id) {
        EventResponse res = new EventResponse();
        try {
            res = eventservice.deleteEvent(Id);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setMessage("OOPs,Something wrong");
            return new ResponseEntity<>(res, HttpStatus.EXPECTATION_FAILED);
        }
    }
}