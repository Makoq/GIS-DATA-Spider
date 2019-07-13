const createData=require("../service/data").create

const https=require("https")


var arcgishub=async function (post_data,path){

    
    
    // var content=qs.stringify(post_data)

    var options={
        hostname:"opendata.arcgis.com",
        port:"443",
        path:path,
        method:"get",
        headers:{
            Connection: 'keep-alive',
            // 'Accept-Encoding': 'gzip, deflate, br',
            Host: 'opendata.arcgis.com',
            Referer: 'https://hub.arcgis.com/search',
            Origin: 'https://hub.arcgis.com',
            // 'User-Agent': user_agent,

        }
    }


    var req=https.get(options,function(res){
        let json=""
       
        // console.log(res.statusCode)
        res.on("data",function(chunk){
            
             json+=chunk

        })

        res.on("end",function(){
            let data=JSON.parse(json)
            let arr=[]
             
             console.log(data)  
             console.log("\n-----\n")  
            // for(let i=0;i<10;i++){ 
            //     if(!data.data||data.data[i]==undefined){
            //         continue
            //     }                
            //     let obj=new Object();
            //     obj["name"]=data.data[i].attributes.name
            //     obj["type"]="option1"
            //     obj["description"]=data.data[i].attributes.description
            //     obj["detail"]="<p>"+data.data[i].attributes.orgName+"</p>"+"\n"+"<p>"+data.data[i].attributes.owner+"</p>"+"\n"+"<p>"+data.data[i].attributes.searchDescription+"</p>"+"\n"+"<p>"+data.data[i].attributes.licenseInfo+"</p>"
            //     obj["author"]=42
            //     obj["reference"]="https://hub.arcgis.com/datasets/"+data.data[i].attributes.slug
            //     obj["keywords"]=data.data[i].attributes.tags
            //     obj["classifications"]=[]
            //     obj["display"]=[]
            //     obj["authorship"]=[{email:"unknow",name:"arcgishub",homepage:"https://hub.arcgis.com/"}]
            //     obj["createTime"]=new Date()
            //     obj["lastModifyTime"]=new Date()
            //     obj["shareCount"]=0
            //     obj["viewCount"]=100
            //     obj["thumbsUpCount"]=100
            //     obj["contributers"]=[]
            //     obj["meta"]=[]
            //     obj["comments"]=[]
            //     obj["relatedModels"]=[]

            //     createData(obj)
                    
            //     }
                   
            //     console.log("db close")
        })
    })


    req.on("error",function(e){
        console.error(e.message)
    })


    // req.write(content);
    req.end();
}

module.exports.arcgishub=arcgishub;