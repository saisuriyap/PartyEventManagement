package com.party.suriya.Service.impl;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.party.suriya.Service.BookingService;
import com.party.suriya.UserRepository.BookingRepository;
import com.party.suriya.dto.request.BookingRequest;
import com.party.suriya.dto.response.BookingResponse;
import com.party.suriya.model.Booking;

import lombok.RequiredArgsConstructor;
import java.util.*;
@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;


    @Override
    public BookingResponse createBooking(BookingRequest request) {
       
        Long userId = request.getUserId();
        Long venueId = request.getVenueId();

        Booking booking = Booking.builder()
                .noOfPersons(request.getNoOfPersons())
                .ondate(request.getOnDate())
             
                .userId(userId)
                .venueId(venueId)
                .eventType(request.getEventType())
                .paymentStatus(request.getPaymentStatus())
                .build();

        bookingRepository.save(booking);

        return BookingResponse.builder()
                .message("Booking created successfully!")
                .build();
    }
    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}