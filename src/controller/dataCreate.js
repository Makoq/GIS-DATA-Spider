const createData=require("../service/data").create

const https=require("https")
const qs=require("querystring")



var getArcgisHub=function(){

    var post_data={
        "fields": {
            "datasets": "sector,name,modified,modifiedProvenance,searchDescription,recordCount,source,extent,owner,thumbnailUrl,type,url,xFrameOptions,contentSecurityPolicy,siteUrl,tags,collection,size,initiativeCategories,slug,startDate,venue,initiativeId,initiativeTitle,organizers,isAllDay,onlineLocation,timeZone"
        },
        "agg": {
            "fields": "downloadable,hasApi,sector,region,source,tags,type"
        },
        "filter": {
            "openData": true
        },
        "page": {
            "size":10 ,
            "number": 1
        }
    }
        // for(let i=1;i<=1000;i++){
        //     post_data.page.number=i
        //     arcgishub(post_data)
                                                                    
        // }
        var i=1
        setInterval( ()=>{
            post_data.page.number=i
            i++
            if(i<=20000){
                arcgishub(post_data)
            }else{
                clearInterval();
            }
            
        },1000)
    
}
var j=1
var arcgishub=function (post_data){

    
     //post数据字符串化
    var content=JSON.stringify(post_data)

    var options={
        hostname:"opendata.arcgis.com",
        port:"443",
        path:"/api/v3/datasets",
        method:"post",
        headers:{
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(content)
            // Connection: 'keep-alive',
            // 'Accept-Encoding': 'gzip, deflate, br',
            // Host: 'opendata.arcgis.com',
            // Referer: 'https://hub.arcgis.com/search',
            // Origin: 'https://hub.arcgis.com',
            // 'User-Agent': user_agent,

        }
    }


    var req=https.request(options,function(res){
        let json=""
       
        // console.log(res.statusCode)
        res.on("data",function(chunk){
            
             json+=chunk

        })

        res.on("end",function(){
           
            let data=JSON.parse(json)
            //每次服务器响应计数
            console.log("server res",j++)
            //响应百次倍时提示
            if(j%100==00){
                console.log("100 again")
            }
            //响应结束
            if(j===20000){
                console.log("over")
            }
            // console.log(data.data)  
               
            for(let i=0;i<10;i++){ 
                                
                let obj=new Object();
                obj["name"]=data.data[i].attributes.name
                obj["type"]="option1"
                obj["description"]=data.data[i].attributes.description
                obj["detail"]="<p>"+data.data[i].attributes.orgName+"</p>"+"\n"+"<p>"+data.data[i].attributes.owner+"</p>"+"\n"+"<p>"+data.data[i].attributes.searchDescription+"</p>"+"\n"+"<p>"+data.data[i].attributes.licenseInfo+"</p>"
                obj["author"]=42
                obj["reference"]="https://hub.arcgis.com/datasets/"+data.data[i].attributes.slug
                obj["keywords"]=data.data[i].attributes.tags
                obj["classifications"]=[]
                obj["display"]=[]
                obj["authorship"]=[{email:"unknow",name:"arcgishub",homepage:"https://hub.arcgis.com/"}]
                obj["createTime"]=new Date()
                obj["lastModifyTime"]=new Date()
                obj["shareCount"]=0
                obj["viewCount"]=100
                obj["thumbsUpCount"]=100
                obj["contributers"]=[]
                obj["meta"]=[]
                obj["comments"]=[]
                obj["relatedModels"]=[]

                createData(obj)
                    
                }
                   
            //     console.log("db close")


        })



    })


    req.on("error",function(e){
        console.error(e.message)
    })


    req.write(content);
    req.end();
}

module.exports.getArcgisHub=getArcgisHub;