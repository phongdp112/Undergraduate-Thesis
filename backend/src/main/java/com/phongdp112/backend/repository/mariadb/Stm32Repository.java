package com.phongdp112.backend.repository.mariadb;

import com.phongdp112.backend.domain.mariadb.Stm32;
import com.phongdp112.backend.dto.response.Stm32Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface Stm32Repository extends JpaRepository<Stm32,String> {
    List<Stm32> findAllByStm32SerialNumber(String stm32SerialNumber);
    @Query("SELECT new com.phongdp112.backend.dto.response.Stm32Response(s.stm32SerialNumber, g.gardenName, s.stm32Name, s.isConnected, s.lastConnected, s.deviceQuantity) " +
            "FROM Stm32 s JOIN Garden g ON s.gardenId = g.id WHERE s.userId = :userId")
    List<Stm32Response> findAllWithGarden(Integer userId);

}
