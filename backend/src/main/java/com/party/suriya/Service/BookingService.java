package com.party.suriya.Service;

import java.util.List;

import com.party.suriya.dto.request.BookingRequest;
import com.party.suriya.dto.response.BookingResponse;
import com.party.suriya.model.Booking;

public interface BookingService {
    BookingResponse createBooking(BookingRequest request);
    List<Booking> getAllBookings();

}