package com.tonytao.fullStackProj2;

import java.util.function.Predicate;
import java.util.regex.Pattern;

public class EmailValidator implements Predicate<String>{

    private static final Predicate<String> VALID_EMAIL_ADDRESS_REGES =
            Pattern.compile(
                    "^[A-Z0-9._%-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
                    Pattern.CASE_INSENSITIVE
            ).asPredicate();


    @Override
    public boolean test(String email){

    }

}
