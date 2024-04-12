const cds = require("@sap/cds");
module.exports = cds.service.impl(async function() {
    // Connect Service API_BUSINESS_PARTNER
    const bp = await cds.connect.to("API_BUSINESS_PARTNER");
    this.on("READ", "A_BusinessPartner", async req => {
        return bp.run(req.query);
    })
})