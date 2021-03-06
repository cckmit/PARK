package com.jet.cloud.deepmind.model;

import lombok.Data;

import java.io.Serializable;

/**
 * @author zhuyicheng
 * @create 2019/10/28 13:32
 * @desc SysEnergyTypeVO
 */
@Data
public class SysEnergyTypeVO implements Serializable {
    private static final long serialVersionUID = 2976200125804096571L;
    private String energyTypeId;
    private String energyTypeName;
    private String energyLoadParaId;

    public SysEnergyTypeVO() {
    }

    public SysEnergyTypeVO(String energyTypeId, String energyTypeName, String energyLoadParaId) {
        this.energyTypeId = energyTypeId;
        this.energyTypeName = energyTypeName;
        this.energyLoadParaId = energyLoadParaId;
    }
}
