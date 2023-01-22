export default function handler(req, res) {
    if (req.method === 'POST') {
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': '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',
          }

          const data = {  
            "to":[  
               {  
                  "email":req.body.email
                  
               }
            ],
            "templateId":1,
            
            "headers":{  
               "X-Mailin-custom":"custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3",
               "charset":"iso-8859-1"
            }
         }
      // Process a POST request
      fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      }).then((res)=>{{
        console.log(res.status)
        return res;
      }}).catch((err)=>{
        console.log(err)
      })
    } else {
      // Handle any other HTTP method
    }
  }