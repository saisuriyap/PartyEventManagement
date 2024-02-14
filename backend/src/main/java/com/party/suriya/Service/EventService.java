package com.party.suriya.Service;

import java.util.List;

import com.party.suriya.dto.request.EventRequest;
import com.party.suriya.dto.response.EventResponse;
import com.party.suriya.model.Event;

public interface EventService{
EventResponse createEvent(EventRequest request);
List<Event> getAllEvents();
EventResponse deleteEvent(Long Id);
    EventResponse updateEvent(Long Id,EventRequest request);

}