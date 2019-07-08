package greenfield.group.com.gatewayutils.response;

import greenfield.group.com.gatewayutils.results.SimpleResult;

public class GateResponse<T> {

    private SimpleResult<T> result;

    public GateResponse(SimpleResult<T> result) {
        this.result = result;
    }

    public SimpleResult<T> getResult() {
        return result;
    }
}