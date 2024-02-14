package com.party.suriya.Controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;
import static com.party.suriya.Utils.MyConstant.USER;
import static com.party.suriya.Utils.MyConstant.USERLIST;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.party.suriya.dto.response.BasicResponse;
import com.party.suriya.dto.response.UserResponse;
import com.party.suriya.Service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

        @GetMapping(USERLIST)
        public ResponseEntity<BasicResponse<UserResponse>> create() {
            BasicResponse<UserResponse> response = new BasicResponse<>();
            try {
                response = userService.getAllUser();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("Something went worng!!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
    
}


