package com.party.suriya.Service;

import com.party.suriya.dto.response.BasicResponse;
import com.party.suriya.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
