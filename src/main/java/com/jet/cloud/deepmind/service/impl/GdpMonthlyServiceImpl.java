package com.jet.cloud.deepmind.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.jet.cloud.deepmind.common.CurrentUser;
import com.jet.cloud.deepmind.common.util.DateUtil;
import com.jet.cloud.deepmind.entity.GdpMonthly;
import com.jet.cloud.deepmind.model.QueryVO;
import com.jet.cloud.deepmind.model.Response;
import com.jet.cloud.deepmind.model.ServiceData;
import com.jet.cloud.deepmind.repository.GdpMonthlyRepo;
import com.jet.cloud.deepmind.service.GdpMonthlyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

/**
 * @author maohandong
 * @create 2019/11/21 15:44
 */
@Service
public class GdpMonthlyServiceImpl implements GdpMonthlyService {

    @Autowired
    private GdpMonthlyRepo gdpMonthlyRepo;
    @Autowired
    private CurrentUser currentUser;

    @Override
    public Response query(QueryVO vo) {
        Pageable pageable = vo.Pageable();
        JSONObject key = vo.getKey();
        String objType = key.getString("objType");
        String objId = key.getString("objId");
        Long start = key.getLong("start");
        LocalDateTime localDateTime1 = DateUtil.longToLocalTime(start);
        int startYear = localDateTime1.getYear();
        int startMonth = localDateTime1.getMonth().getValue();
        Long end = key.getLong("end");
        LocalDateTime localDateTime2 = DateUtil.longToLocalTime(end);
        int endYear = localDateTime2.getYear();
        int endMonth = localDateTime2.getMonth().getValue();
        String sm = startMonth + "";
        String em = endMonth + "";
        if (startMonth < 10) {
            sm = "0" + startMonth;
        }
        if (endMonth < 10) {
            em = "0" + endMonth;
        }
        String startDate = startYear + "-" + sm;
        String endDate = endYear + "-" + em;
        Page<GdpMonthly> list = gdpMonthlyRepo.findData(objType, objId, startDate, endDate, pageable);
        Response ok = Response.ok(list.getContent(), list.getTotalElements());
        ok.setQueryPara(vo);
        return ok;
    }

    @Override
    public Response queryById(Integer id) {
        GdpMonthly gdpMonthly = gdpMonthlyRepo.findById(id).get();
        Response ok = Response.ok("查询gdp成功", gdpMonthly);
        ok.setQueryPara(id);
        return ok;
    }

    @Transactional
    @Override
    public ServiceData addOrEdit(GdpMonthly gdpMonthly) {
        try {
            String objType = gdpMonthly.getObjType();
            String objId = gdpMonthly.getObjId();
            Integer year = gdpMonthly.getYear();
            Integer month = gdpMonthly.getMonth();
            GdpMonthly old = gdpMonthlyRepo.findByObjTypeAndObjIdAndYearAndMonth(objType, objId, year, month);
            if (gdpMonthly.getId() == null) {
                if (old != null) {
                    return ServiceData.error("新增月Gdp重复", currentUser);
                }
                //新增月Gdp
                gdpMonthly.setCreateNow();
                gdpMonthly.setCreateUserId(currentUser.userId());
                gdpMonthlyRepo.save(gdpMonthly);
            } else {
                //修改月Gdp
                old.setGdp(gdpMonthly.getGdp());
                old.setAddValue(gdpMonthly.getAddValue());
                old.setMemo(gdpMonthly.getMemo());
                old.setUpdateNow();
                old.setUpdateUserId(currentUser.userId());
            }
            return ServiceData.success("新增或更新成功", currentUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ServiceData.error("新增或更新失败", e, currentUser);
        }
    }

    @Override
    public ServiceData delete(Integer id) {
        try {
            gdpMonthlyRepo.deleteById(id);
            return ServiceData.success("删除gdp成功", currentUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ServiceData.error("删除gdp失败", e, currentUser);
        }
    }
}
