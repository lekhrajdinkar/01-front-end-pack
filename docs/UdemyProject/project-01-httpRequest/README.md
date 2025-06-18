# A. HttPModule (Not Http Client Module)

1. REST Blueprint defined inside in service.
2. REST call are invoked inside the component.
3. BAsic POST, GET, pUT and delete request.
4. Response Type is returned type from body of HttpResponse.
5. Effective transformation:
- convert JSON into Array using  .json method
- using  get(...).map( data => ()) to modify response. it also convert it anothor Observable.
6. Effective error Handlimg.
- using  get(...).map(...).catch( error => ()). it doesnot wrap the returned object into another Observable ubnlike map().
- need to explicutyly return Observable.throw('error');

---

# B. HttpClientModuleß