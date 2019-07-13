 var re=require('./src/controller/dataCreate')

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
        "size":0 ,
        "number": 1
    }
}


var path="/api/v3/datasets?page[size]=10&page[number]="

    for(let i=1;i<=1000;i++){
        re.arcgishub(post_data,path+i)

    }

