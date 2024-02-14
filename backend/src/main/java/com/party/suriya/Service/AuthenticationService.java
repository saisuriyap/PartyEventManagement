package com.party.suriya.Service;

import com.party.suriya.dto.request.RegisterRequest;
import com.party.suriya.dto.request.loginRequest;
import com.party.suriya.dto.response.LoginResponse;
import com.party.suriya.dto.response.RegisterResponse;

public interface AuthenticationService {
        RegisterResponse register (RegisterRequest request);

        LoginResponse login(loginRequest request);
}
