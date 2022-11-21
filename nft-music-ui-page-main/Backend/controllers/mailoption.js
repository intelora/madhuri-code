exports.emailTheme = function(data){  
    let linkBtn='';
    if(data.href && data.btnText){
       linkBtn = `<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word">
                      <div style="font-family:Arial,sans-serif;font-size:20px;line-height:25px;text-align:center;color:#6a6a6a">
                      <a class="verify-btn" style="background: #4285f4;color: #fff;border: none;padding: 12px 20px;" href='${data.href}'>${data.btnText}</a>
                      </div>    
                   </td>`
    }
    console.log("jhjhjhj")
    return {
      from: data.from,
      to: data.to,
      subject: data.subject,
      html: ` <div >
        <div>
           <div style="margin:0px auto;max-width:800px">
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                 <tbody>
                    <tr>
                       <td style="direction:ltr;font-size:0px;padding:10px 0px;text-align:center">
                       </td>
                    </tr>
                 </tbody>
              </table>
           
           </div>
        <div style="background:#fff;background-color:transparent;margin:0px auto;border-radius:0px;max-width:800px">
          <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;border-radius:0px">
             <tbody>
                <tr>
                   <td style="direction:ltr;font-size:0px;padding:8px 0;text-align:center; background: #fff;">
                      <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                         <table border="0" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%">
                            <tbody>
                               <tr>
                                  <td align="center" style="font-size:0px;padding:0px 25px 0px 25px;word-break:break-word">
                                     <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px">
                                        <tbody>
                                           <tr>
                                              <td style="width:auto">
                                                 <img height="auto" src="logo-light.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px" width="150"  class="CToWUd">
                                              </td>
                                           </tr>
                                        </tbody>
                                     </table>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                   </td>
                </tr>
             </tbody>
          </table>
        </div>
           
           <div style="background:#fff;margin:0px auto;border-radius:0px;max-width:800px">
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;border-radius:0px">
                 <tbody>
                    <tr>
                       <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">
                          <div style="margin:0px auto;max-width:800px">
                             <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                                <tbody>
                                   <tr>
                                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center">
                                         <div style="font-size:0px;text-align:center;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                                            <table border="0" cellpadding="0" cellspacing="0" style="vertical-align:top" width="100%">
                 <tbody>
                    <tr>
                       <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                          <div style="font-family:Arial,sans-serif;font-size:25px;line-height:1;font-weight: 600;text-align:center;color:#7a7a7a">Hi ${data.email},<br>Welcome To SSV</div>
                       </td>
                    </tr>
                    <tr>
                       <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word">
                          <div style="font-family:Arial,sans-serif;font-size:20px;line-height:25px;text-align:center;color:#6a6a6a">
                          <p>
                          ${data.message}
                          </p>
                           
                            </div>
                       </td>
                    </tr>
                    <tr>
                    ${linkBtn}
                    </tr>
                    
                 </tbody>
                </table>
                                         </div>
                                      </td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                       </td>
                    </tr>
                 </tbody>
              </table>
           </div>
          
           <div style="background:#fff;background-color:#fff; border-top: 1px solid #a79aac;margin:0px auto;border-radius:0px;max-width:800px">
              <font color="#888888">
                    </font><font color="#888888">
                 </font><font color="#888888">
              </font><table align="center" border="0" cellpadding="0" cellspacing="0" style="background:transparent;background-color:transparent;width:100%;border-radius:0px">
                 <tbody>
                   <tr>
                       <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word">
                          <div style="font-family:Arial,sans-serif;font-size:15px;line-height:25px;text-align:center;color:#727272">
                            Best regards<br>The Tennis Club Community
                          </div>
                       </td>
                    </tr></tbody></table><font color="#888888">
           </font></div><font color="#888888">
        </font></div><font color="#888888">
        </font>
        </div>`,
    }
    }