package greenfield.group.com.gateway.gates;

import greenfield.group.com.gatecommon.SimpleResult;
import greenfield.group.com.gatecommon.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class JournalGate extends Gate {

    @Autowired
    private RestTemplate restTemplate;

    // TODO передалать во всех гейтах единный вызов сервисов

    /**
     * Вызов микросервиса журнала
     *
     * @param params запрос с интерфейса при загрузке журнала
     * @return
     */
    @RequestMapping(path = "/{gateName}/{methodName}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public SimpleResult postCall(@RequestHeader(value = "Authorization", defaultValue = "") String authorization
            , @RequestBody Map<String, Object> params
            , @PathVariable final String gateName
            , @PathVariable final String methodName) {

        if (methodName == null || methodName.isEmpty()) {
            return new SimpleResult(Status.OK, "Вызов метода невозможен");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", authorization);
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(params, headers);
        return this.restTemplate
                .postForEntity(serviceRegistry.get(gateName) + "/" + methodName, httpEntity, SimpleResult.class)
                .getBody();
    }

    /**
     * Вызов микросервиса журнала
     *
     * @param params запрос с интерфейса при загрузке журнала
     * @return
     */
    @RequestMapping(path = "/{gateName}/{methodName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public SimpleResult getLoad(@RequestHeader(value = "Authorization", defaultValue = "") String authorization
            , @RequestBody Map<String, Object> params
            , @PathVariable final String gateName
            , @PathVariable final String methodName
    ) {

        if (methodName == null || methodName.isEmpty()) {
            return new SimpleResult(Status.OK, "Вызов метода невозможен");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", authorization);
        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(params, headers);
        return this.restTemplate
                .postForEntity(serviceRegistry.get(gateName) + "/" + methodName, httpEntity, SimpleResult.class)
                .getBody();
    }

}
