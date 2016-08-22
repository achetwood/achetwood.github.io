var expect = chai.expect;

describe("Bitlist Core Functions", function() {
	describe("Check", function(){
		it('should check for equality of 1 and 1.', function() {
			expect(1).to.equal(1);
		});
		it('should be able to decode a StaircaseCode.', function() {
			var SObj = findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w');
			expect(SObj.version).to.equal("version2.3");
		});
		it('should generate a bitlist', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
	});
});

describe("Bitlist Jobs", function() {
	describe("Order 25000 (Straight Flight)", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL25000 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			console.log(testBL25000);
			expect(typeof(testBL25000.bits_notes)).to.equal('string');
		});
		it('should have no loose nosing.', function() {
			var testBL25000 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL25000.loose_nosing).to.equal(0);
		});
	});
	
	//ORDER 43513
	describe("Order 43513 - Oak Left Qtr Landing w/ Extra Newels, No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL43513 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjg1LTE0LTIyMC05MDAtOTAwLTkwMC1sZWZ0LXF1YXRlcl9zcGFjZS1ub25lLTNfd2luZGVyLTctTmFOLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1vYWstbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1jYTE0NGpwLWZhbHNlLTEtMS0xLTAtMS1ub25lLTEtMS0xLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL43513.bits_notes)).to.equal('string');
		});
		it('Should Generate 2 loose strings', function() {
			var testBL43513 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjg1LTE0LTIyMC05MDAtOTAwLTkwMC1sZWZ0LXF1YXRlcl9zcGFjZS1ub25lLTNfd2luZGVyLTctTmFOLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1vYWstbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1jYTE0NGpwLWZhbHNlLTEtMS0xLTAtMS1ub25lLTEtMS0xLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43513.loose_strings).to.equal(2);
		});
		it('Should Generate 24 dowels', function() {
			var testBL43513 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjg1LTE0LTIyMC05MDAtOTAwLTkwMC1sZWZ0LXF1YXRlcl9zcGFjZS1ub25lLTNfd2luZGVyLTctTmFOLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1vYWstbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1jYTE0NGpwLWZhbHNlLTEtMS0xLTAtMS1ub25lLTEtMS0xLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43513.dowels).to.equal(24);
		});
	});
	
	//ORDER 43447
	describe("Order 43447 - Straight Flight w/ LH Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL43447 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzM1LTEzLTIzMy42Ni03MTUtNzE1LTcxNS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVFI3LWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL43447.bits_notes)).to.equal('string');
		});
		it('Should Generate 2-6 loose wedges', function() {
			var testBL43447 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzM1LTEzLTIzMy42Ni03MTUtNzE1LTcxNS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVFI3LWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL43447.loose_wedges).to.be.within(2, 6);
		});
		it('Should Generate 3 blocks', function() {
			var testBL43447 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzM1LTEzLTIzMy42Ni03MTUtNzE1LTcxNS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVFI3LWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL43447.blocks).to.equal(3);
		});
		it('Should Generate a landing half newel with Pine Square material', function() {
			var testBL43447 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzM1LTEzLTIzMy42Ni03MTUtNzE1LTcxNS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVFI3LWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL43447.landing_half_newels_material).to.equal('Pine square');
		});
	});
	
	//ORDER 43673
	describe("Order 43673 - Double Winder w/ Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL43673 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQwLTEzLTI0Mi42My04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LWxlZnQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL43673.bits_notes)).to.equal('string');
		});
		it('should generate a loose nosing', function() {
			var testBL43673 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQwLTEzLTI0Mi42My04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LWxlZnQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43673.loose_nosing).to.equal(1);
		});
		it('should generate a bottom riser', function() {
			var testBL43673 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQwLTEzLTI0Mi42My04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LWxlZnQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43673.bottom_risers).to.equal(1);
		});
		it('should generate 2 loose strings', function() {
			var testBL43673 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQwLTEzLTI0Mi42My04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LWxlZnQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43673.loose_strings).to.equal(2);
		});	
		it('should generate 11 raking spindles', function() {
			var testBL43673 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQwLTEzLTI0Mi42My04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LWxlZnQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43673.raking_spindles1).to.equal(11);
		});
	});
	
	//ORDER 43920
	describe("Order 43673 - Small single winder", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL43920 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay05OTAtNS0yMjAtODgwLTg4MC04ODAtbGVmdC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL43920.bits_notes)).to.equal('string');
		});
		it('should generate a loose nosing', function() {
			var testBL43920 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay05OTAtNS0yMjAtODgwLTg4MC04ODAtbGVmdC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43920.loose_nosing).to.equal(1);
		});
		it('should generate a loose string', function() {
			var testBL43920 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay05OTAtNS0yMjAtODgwLTg4MC04ODAtbGVmdC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43920.loose_strings).to.equal(1);
		});
		it('should generate a trenched newel', function() {
			var testBL43920 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay05OTAtNS0yMjAtODgwLTg4MC04ODAtbGVmdC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL43920.trenched_newels).to.equal(1);
		});
	});
	//ORDER 42443
	describe("Order 42443 - Double Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL42443 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTQ1LTEzLTIyMC04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItNi0wLWN1c3RvbS1jdXN0b20tTEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC0tZmFsc2UtMS0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL42443.bits_notes)).to.equal('string');
		});
		it('should generate a loose nosing', function() {
			var testBL42443 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTQ1LTEzLTIyMC04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItNi0wLWN1c3RvbS1jdXN0b20tTEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC0tZmFsc2UtMS0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL42443.loose_nosing).to.equal(1);
		});
	});
	
	//ORDER 48276
	describe("Order 48276 - Oak Winder with Glass", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48276 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTQtTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1nbGFzc19lbWJlZGRlZC0wLTAtMC0wLTAtb2FrLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLUJCOSA2ZHItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLUdsYXNzLTEwLTIyLTcwLTAtMQ==='));
			expect(typeof(testBL48276.bits_notes)).to.equal('string');
		});
		it('should generate between 10 and 14 loose wedges', function() {
			var testBL48276 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTQtTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1nbGFzc19lbWJlZGRlZC0wLTAtMC0wLTAtb2FrLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLUJCOSA2ZHItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLUdsYXNzLTEwLTIyLTcwLTAtMQ==='));
			expect(testBL48276.loose_wedges).to.be.within(10, 14);
		});
	});
	
	//ORDER 48195
	describe("Order 48195 - Double Winder w/ Balustrade on both sides", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(typeof(testBL48195.bits_notes)).to.equal('string');
		});
		it('should generate between 18 and 22 loose wedges', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.loose_wedges).to.be.within(18,22);
		});
		it('should generate 28 blocks', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.blocks).to.equal(28);
		});
		it('should generate 5 Trenched Newels and 1 Trenched Half Newel', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.trenched_newels).to.equal(5);
			expect(testBL48195.trenched_half_newels).to.equal(1);
		});
		it('should generate 4 total handrails', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.cut_handrail1+testBL48195.cut_handrail2+testBL48195.cut_handrail3).to.equal(4);
		});
		it('should generate 2 lots of raking spindles, one with qty 18, one with qty 6', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.raking_spindles1).to.equal(18);
			expect(testBL48195.raking_spindles2).to.equal(6);
		});
		it('should generate 13 landing spindles', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.landing_spindles).to.equal(13);
		});
		it('should generate 2 loose strings', function() {
			var testBL48195 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTcwLTE0LTIzNS42MS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtdHVybmVkLTEuOC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU1QxNyA0RFQtZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA===='));
			expect(testBL48195.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 48194
	describe("Order 48194 - Double Winder w/ Balustrade, Short middle run", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48194 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEzLTIyMC05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTEtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUGU3MXJoLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w===='));
			expect(typeof(testBL48194.bits_notes)).to.equal('string');
		});
		it('should generate between 22-26 loose wedges', function() {
			var testBL48194 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEzLTIyMC05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTEtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUGU3MXJoLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w===='));
			expect(testBL48194.loose_wedges).to.be.within(22,26);
		});
		it('should generate 2 loose strings', function() {
			var testBL48194 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEzLTIyMC05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTEtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUGU3MXJoLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w===='));
			expect(testBL48194.loose_strings).to.equal(2);
		});
	});	
	
	//ORDER 48199
	describe("Order 48199 - Single winder w/ No Handrail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48199 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjkwLTEzLTIyOS44MS04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tbGVmdC1zcXVhcmUtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVM2IDNyeC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA======'));
			expect(typeof(testBL48199.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48199 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjkwLTEzLTIyOS44MS04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tbGVmdC1zcXVhcmUtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVM2IDNyeC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA======'));
			expect(testBL48199.loose_wedges).to.be.within(10,14);
		});
		it('should generate 1 loose string', function() {
			var testBL48199 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjkwLTEzLTIyOS44MS04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tbGVmdC1zcXVhcmUtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVM2IDNyeC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA======'));
			expect(testBL48199.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48201
	describe("Order 48201 - Double Winder w/ No Handrail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48201 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjk1LTEzLTIzMC4yNC04NzAtODcwLTg3MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC0yLWxlZnQtc3F1YXJlLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1TVzIwOFBTLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA======='));
			expect(typeof(testBL48201.bits_notes)).to.equal('string');
		});
		it('should generate 18-22 loose wedges', function() {
			var testBL48201 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjk1LTEzLTIzMC4yNC04NzAtODcwLTg3MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC0yLWxlZnQtc3F1YXJlLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1TVzIwOFBTLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA======='));
			expect(testBL48201.loose_wedges).to.be.within(18,22);
		});
		it('should generate 1 loose string', function() {
			var testBL48201 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjk1LTEzLTIzMC4yNC04NzAtODcwLTg3MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC0yLWxlZnQtc3F1YXJlLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1TVzIwOFBTLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA======='));
			expect(testBL48201.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48203
	describe("Order 48203 - Single Winder w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48203 = genBitlist(findStairObject('dmVyc2lvbjIuMy1zYy0yOTc1LTE0LTI0My4wMS05NTAtOTUwLTk1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1BYjU1NGJuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w======='));
			expect(typeof(testBL48203.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48203 = genBitlist(findStairObject('dmVyc2lvbjIuMy1zYy0yOTc1LTE0LTI0My4wMS05NTAtOTUwLTk1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1BYjU1NGJuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w======='));
			expect(testBL48203.loose_wedges).to.be.within(10,14);
		});
		it('should generate 1 loose string', function() {
			var testBL48203 = genBitlist(findStairObject('dmVyc2lvbjIuMy1zYy0yOTc1LTE0LTI0My4wMS05NTAtOTUwLTk1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1BYjU1NGJuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w======='));
			expect(testBL48203.loose_strings).to.equal(1);
		});
		it('should generate Whitewood Loose Treads', function() {
			var testBL48203 = genBitlist(findStairObject('dmVyc2lvbjIuMy1zYy0yOTc1LTE0LTI0My4wMS05NTAtOTUwLTk1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1BYjU1NGJuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w======='));
			expect(testBL48203.loose_treads_comment).to.equal("32mm Whitewood");
		});
	});
	
		//ORDER 48205
	describe("Order 48205 - Single Winder w/ Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48205 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjc1LTEzLTIyOC41My04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMi0wLXJlZHdvb2QtcGluZS1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVNHOCA2REQtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(typeof(testBL48205.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48205 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjc1LTEzLTIyOC41My04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMi0wLXJlZHdvb2QtcGluZS1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVNHOCA2REQtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(testBL48205.loose_wedges).to.be.within(10,14);
		});
		it('should generate 1 loose string', function() {
			var testBL48205 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjc1LTEzLTIyOC41My04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMi0wLXJlZHdvb2QtcGluZS1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVNHOCA2REQtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(testBL48205.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48206
	describe("Order 48206 - Single Winder w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48206 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1waW5lLXNxdWFyZS0wLTAtMC0wLTAtcmVkd29vZC1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU0c4IDZERC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=========='));
			expect(typeof(testBL48206.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48206 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1waW5lLXNxdWFyZS0wLTAtMC0wLTAtcmVkd29vZC1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU0c4IDZERC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=========='));
			expect(testBL48206.loose_wedges).to.be.within(10,14);
		});
		it('should generate 1 loose string', function() {
			var testBL48206 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1waW5lLXNxdWFyZS0wLTAtMC0wLTAtcmVkd29vZC1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU0c4IDZERC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=========='));
			expect(testBL48206.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48210
	describe("Order 48210 - Double Winder w/ Bullnose, Short Run, Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48210 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDUwLTEyLTIyNi43NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0yLTMtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXRyMTI3bGItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(typeof(testBL48210.bits_notes)).to.equal('string');
		});
		it('should generate 20-24 loose wedges', function() {
			var testBL48210 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDUwLTEyLTIyNi43NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0yLTMtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXRyMTI3bGItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(testBL48210.loose_wedges).to.be.within(20,24);
		});
		it('should generate 3 loose strings', function() {
			var testBL48210 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDUwLTEyLTIyNi43NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0yLTMtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXRyMTI3bGItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(testBL48210.loose_strings).to.equal(3);
		});
		it('should generate 7 loose treads', function() {
			var testBL48210 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDUwLTEyLTIyNi43NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0yLTMtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXRyMTI3bGItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA========'));
			expect(testBL48210.loose_treads).to.equal(7);
		});
	});
	
	//ORDER 48211
	describe("Order 48211 - Qtr Landing w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48211 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04OTUtODk1LTg5NS1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci0xMC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1ERTcgNkJFLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w=========='));
			expect(typeof(testBL48211.bits_notes)).to.equal('string');
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL48211 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04OTUtODk1LTg5NS1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci0xMC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1ERTcgNkJFLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w=========='));
			expect(testBL48211.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48212
	describe("Order 48212 - Single Winder w/ No Handrail, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48212 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzcwLTExLTIzOS4yOS03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbGVmdC1zcXVhcmUtTEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRlkyIDlETC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA============'));
			expect(typeof(testBL48212.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48212 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzcwLTExLTIzOS4yOS03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbGVmdC1zcXVhcmUtTEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRlkyIDlETC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA============'));
			expect(testBL48212.loose_wedges).to.be.within(10,14);
		});
		it('should generate 1 loose string', function() {
			var testBL48212 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzcwLTExLTIzOS4yOS03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbGVmdC1zcXVhcmUtTEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRlkyIDlETC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA============'));
			expect(testBL48212.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48213
	describe("Order 48213 - Single winder w/ Balustrade, Split wall string", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48213 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE3LTIzNS04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1ub25lLXF1YXRlcl9zcGFjZS0wLTAtcmlnaHQtZnVsbC1ub25lLW1kZi1zdG9wX2NoYW1mZXJlZC0wLTAtMC0wLTAtcmVkd29vZC1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1zczE3N254LWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(typeof(testBL48213.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48213 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE3LTIzNS04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1ub25lLXF1YXRlcl9zcGFjZS0wLTAtcmlnaHQtZnVsbC1ub25lLW1kZi1zdG9wX2NoYW1mZXJlZC0wLTAtMC0wLTAtcmVkd29vZC1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1zczE3N254LWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48213.loose_wedges).to.be.within(10,14);
		});
	});
	
	//ORDER 48214 - F1
	describe("Order 48214 F1 - Single Winder w/ Full & Landing Balustrade, Bullnose, Short Run, Extra Newel ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(typeof(testBL48214.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48214.loose_wedges).to.be.within(14,18);
		});
		it('should generate 2 loose strings', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48214.loose_strings).to.equal(2);
		});
		it('should generate Oak newel caps', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48214.full_caps_material).to.equal("OFCAVC - Oak flat");
		});
		it('should generate 4 Loose Treads', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48214.loose_treads).to.equal(4);
		});
		it('should generate Oak HR, Pine BR', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48214.cut_handrail1_material).to.equal("41mm oak HR, pine BR");
		});
		it('should generate 13 raking spindles', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuMi0wLTAtMS0xLXBpbmUtbWRmLXBpbmUtcGluZS1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1zbzQxOGRnLWZhbHNlLTEtMS0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0xLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA============='));
			expect(testBL48214.raking_spindles1).to.equal(13);
		});
	});
	
	//ORDER 48214 - F2
	describe("Order 48214 F2 - Single Winder w/ Full & Landing Balustrade, Curtail & Bullnose, Extra Balustrade on outside", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1CQ3VydGFpbEJ1bGxub3NlLW1kZi1zdG9wX2NoYW1mZXJlZC0zLTAtMC0yLTEtcGluZS1tZGYtcGluZS1waW5lLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvNDE4ZGctZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=============='));
			expect(typeof(testBL48214.bits_notes)).to.equal('string');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1CQ3VydGFpbEJ1bGxub3NlLW1kZi1zdG9wX2NoYW1mZXJlZC0zLTAtMC0yLTEtcGluZS1tZGYtcGluZS1waW5lLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvNDE4ZGctZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=============='));
			expect(testBL48214.loose_wedges).to.be.within(10,14);
		});
		it('should generate 1 loose string', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1CQ3VydGFpbEJ1bGxub3NlLW1kZi1zdG9wX2NoYW1mZXJlZC0zLTAtMC0yLTEtcGluZS1tZGYtcGluZS1waW5lLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvNDE4ZGctZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=============='));
			expect(testBL48214.loose_strings).to.equal(1);
		});
		it('should generate Oak newel caps', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1CQ3VydGFpbEJ1bGxub3NlLW1kZi1zdG9wX2NoYW1mZXJlZC0zLTAtMC0yLTEtcGluZS1tZGYtcGluZS1waW5lLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvNDE4ZGctZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA==============='));
			expect(testBL48214.full_caps_material).to.equal("OFCAVC - Oak flat");
		});
		it('should generate Oak HR, Pine BR', function() {
			var testBL48214 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTEzLTIyNi4zOS04MjUtODI1LTgyNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1CQ3VydGFpbEJ1bGxub3NlLW1kZi1zdG9wX2NoYW1mZXJlZC0zLTAtMC0yLTEtcGluZS1tZGYtcGluZS1waW5lLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvNDE4ZGctZmFsc2UtMS0xLTEtMS0xLWhvcml6b250YWwtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA==============='));
			expect(testBL48214.cut_handrail1_material).to.equal("41mm oak HR, pine BR");
		});
	});
	
	//ORDER 48378
	describe("Order 48378 - Single Winder w/ Full Balustrade, Short Run, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48378 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTU1LTEyLTIzNi40Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTctTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSFI0OERVLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA=============='));
			expect(typeof(testBL48378.bits_notes)).to.equal('string');
		});
		it('should generate 12 raking spindles', function() {
			var testBL48378 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTU1LTEyLTIzNi40Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTctTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSFI0OERVLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA=============='));
			expect(testBL48378.raking_spindles1).to.equal(12);
		});
		it('should generate 2 loose strings', function() {
			var testBL48378 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTU1LTEyLTIzNi40Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTctTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSFI0OERVLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA=============='));
			expect(testBL48378.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 48212
	describe("Order 48223 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48223 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzc1LTExLTIzOS43OS03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1SaDEyNWhzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w============'));
			expect(typeof(testBL48223.bits_notes)).to.equal('string');
		});
		it('should generate 8-12 loose wedges', function() {
			var testBL48223 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzc1LTExLTIzOS43OS03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1SaDEyNWhzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w============'));
			expect(testBL48223.loose_wedges).to.be.within(8,12);
		});
		it('should generate 1 loose string', function() {
			var testBL48223 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzc1LTExLTIzOS43OS03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1SaDEyNWhzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w============'));
			expect(testBL48223.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48306
	describe("Order 48306 - Single Winder w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48306 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0xOTQ1LTEwLTIyMC03OTUtNzk1LTc5NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtdHVybmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWxzMi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA================'));
			expect(typeof(testBL48306.bits_notes)).to.equal('string');
		});
		it('should generate 11 raking spindles', function() {
			var testBL48306 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0xOTQ1LTEwLTIyMC03OTUtNzk1LTc5NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtdHVybmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWxzMi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA================'));
			expect(testBL48306.raking_spindles1).to.equal(11);
		});
		it('should generate 12-16 loose wedges', function() {
			var testBL48306 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0xOTQ1LTEwLTIyMC03OTUtNzk1LTc5NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtdHVybmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWxzMi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA================'));
			expect(testBL48306.loose_wedges).to.be.within(12,16);
		});
	});
	
	//ORDER 48392
	describe("Order 48392 - Single Winder w/ Full Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48392 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTEzLTI0MC4zNy04ODUtODg1LTg4NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUdVMiA5UlktZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=================='));
			expect(typeof(testBL48392.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL48392 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTEzLTI0MC4zNy04ODUtODg1LTg4NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUdVMiA5UlktZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=================='));
			expect(testBL48392.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48394
	describe("Order 48394 - Double Winder w/ No Handrail, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48394 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODAwLTEzLTIzOS4yMS04MTAtODEwLTgxMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTItMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA===================='));
			expect(typeof(testBL48394.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL48394 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODAwLTEzLTIzOS4yMS04MTAtODEwLTgxMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS01LWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTItMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA===================='));
			expect(testBL48394.loose_strings).to.equal(1);
		});
	});
	
	//ORDER 48289
	describe("Order 48289 - Double Winder w/ Full & Landing Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48289 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTY1LTEzLTIyMC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS01LWxlZnQtZnVsbC1MQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTItMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVRBMjEgOVJULWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w================'));
			expect(typeof(testBL48289.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL48289 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTY1LTEzLTIyMC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS01LWxlZnQtZnVsbC1MQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTItMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVRBMjEgOVJULWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w================'));
			expect(testBL48289.loose_strings).to.equal(2);
		});
		it('should generate 16-20 loose wedges', function() {
			var testBL48289 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTY1LTEzLTIyMC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS01LWxlZnQtZnVsbC1MQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTItMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLVRBMjEgOVJULWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w================'));
			expect(testBL48289.loose_wedges).to.be.within(16,20);
		});
	});
	
	//ORDER 48290 F1
	describe("Order 48290 F1 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL48290 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTEzLTIzNi42NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtbnczIDZhbC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=================='));
			expect(typeof(testBL48290.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL48290 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTEzLTIzNi42NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtbnczIDZhbC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=================='));
			expect(testBL48290.loose_strings).to.equal(1);
		});
		it('should generate 8-12 loose wedges', function() {
			var testBL48290 = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTEzLTIzNi42NS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtbnczIDZhbC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=================='));
			expect(testBL48290.loose_wedges).to.be.within(8,12);
		});
	});
	
	//ORDER 48300
	describe("Order 48300 - Single Winder w/ Glass Balustrade, Curtail&Bullnose ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyNS4xMi05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLWN1c3RvbS1jdXN0b20tUkN1cnRhaWxCdWxsbm9zZS1tZGYtZ2xhc3NfZW1iZWRkZWQtMC41NS0wLTAtMC0xLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtQ1YzIDJFQS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyNS4xMi05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLWN1c3RvbS1jdXN0b20tUkN1cnRhaWxCdWxsbm9zZS1tZGYtZ2xhc3NfZW1iZWRkZWQtMC41NS0wLTAtMC0xLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtQ1YzIDJFQS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 10 - 14 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyNS4xMi05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLWN1c3RvbS1jdXN0b20tUkN1cnRhaWxCdWxsbm9zZS1tZGYtZ2xhc3NfZW1iZWRkZWQtMC41NS0wLTAtMC0xLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtQ1YzIDJFQS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.loose_wedges).to.be.within(10,14);
		});
		it('should generate 14 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyNS4xMi05NTAtOTUwLTk1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLWN1c3RvbS1jdXN0b20tUkN1cnRhaWxCdWxsbm9zZS1tZGYtZ2xhc3NfZW1iZWRkZWQtMC41NS0wLTAtMC0xLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtQ1YzIDJFQS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.blocks).to.equal(14);
		});
	});
	
	//ORDER 48315 
	describe("Order 48315 - Straight Flight w/ Full Balustrade, Bullnose ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEzLTIyMi41NS05MzAtOTMwLTkzMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtTEJ1bGxub3NlLW1kZi1zcXVhcmUtNC4yLTAtMC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1DQjEwIDJVUS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEzLTIyMi41NS05MzAtOTMwLTkzMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtTEJ1bGxub3NlLW1kZi1zcXVhcmUtNC4yLTAtMC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1DQjEwIDJVUS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48316
	describe("Order 48316 - Straight Flight w/ Full & Landing Balustrade ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjE1LTEzLTIyOC40LTgzMC04MzAtODMwLW5vbmUtM193aW5kZXItbm9uZS0zX3dpbmRlci1OYU4tTmFOLWxlZnQtZnVsbC1ub25lLW1kZi10dXJuZWQtMS4yLTAtMC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1TdDIgOWhuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjE1LTEzLTIyOC40LTgzMC04MzAtODMwLW5vbmUtM193aW5kZXItbm9uZS0zX3dpbmRlci1OYU4tTmFOLWxlZnQtZnVsbC1ub25lLW1kZi10dXJuZWQtMS4yLTAtMC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1TdDIgOWhuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA='));
			expect(testBL.blocks).to.equal(3);
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjE1LTEzLTIyOC40LTgzMC04MzAtODMwLW5vbmUtM193aW5kZXItbm9uZS0zX3dpbmRlci1OYU4tTmFOLWxlZnQtZnVsbC1ub25lLW1kZi10dXJuZWQtMS4yLTAtMC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1TdDIgOWhuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA='));
			expect(testBL.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48318
	describe("Order 48318 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDcwLTEzLTIyMC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDcwLTEzLTIyMC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 8-12 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDcwLTEzLTIyMC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(8,12);
		});
	});
	
	//ORDER  48320
	describe("Order 48320 - Single Winder w/ Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtS1Q1IDhISC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtS1Q1IDhISC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 14 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtS1Q1IDhISC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.blocks).to.equal(14);
		});
		it('should generate 15 raking spindles', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtS1Q1IDhISC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.raking_spindles1).to.equal(15);
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTIuNC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtS1Q1IDhISC1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_wedges).to.be.within(10,14);
		});
	});
	
	//ORDER 48321
	describe("Order 48321 - Straight Flight w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE0LTIzMC44NS04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvMTg0aHgtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE0LTIzMC44NS04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvMTg0aHgtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.blocks).to.equal(3);
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE0LTIzMC44NS04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXNvMTg0aHgtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48410
	describe("Order 48410 - Straight Flight w/ Full Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay03MjAtNC0yMjAtMTAwMC0xMDAwLTEwMDAtbm9uZS0zX3dpbmRlci1ub25lLTNfd2luZGVyLU5hTi1OYU4tcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTAtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUc0MyAycnAtZmFsc2UtMC0xLTEtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 top risers', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay03MjAtNC0yMjAtMTAwMC0xMDAwLTEwMDAtbm9uZS0zX3dpbmRlci1ub25lLTNfd2luZGVyLU5hTi1OYU4tcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0xLjItMC0wLTAtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUc0MyAycnAtZmFsc2UtMC0xLTEtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.top_risers).to.equal(2);
		});
	});
	
	//ORDER 48421
	describe("Order 48421 - Double Winder w/ Full Balustrade, D-step", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE0LTIzNC4wMi03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS02LWN1c3RvbS1jdXN0b20tTERTdGVwLW1kZi10dXJuZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRVg4IDFUTi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE0LTIzNC4wMi03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS02LWN1c3RvbS1jdXN0b20tTERTdGVwLW1kZi10dXJuZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRVg4IDFUTi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA=='));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 18 - 22 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE0LTIzNC4wMi03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS02LWN1c3RvbS1jdXN0b20tTERTdGVwLW1kZi10dXJuZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRVg4IDFUTi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA=='));
			expect(testBL.loose_wedges).to.be.within(18,22);
		});
		it('should generate 2 trenched newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE0LTIzNC4wMi03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS02LWN1c3RvbS1jdXN0b20tTERTdGVwLW1kZi10dXJuZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRVg4IDFUTi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA=='));
			expect(testBL.trenched_newels).to.equal(2);
		});
		it('should generate 6 19mm plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTUwLTE0LTIzNC4wMi03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS02LWN1c3RvbS1jdXN0b20tTERTdGVwLW1kZi10dXJuZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRVg4IDFUTi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA=='));
			expect(testBL.plugs_19mm).to.equal(6);
		});
	});
	
	//ORDER 48354
	describe("Order 48354 - Single Winder w/ No Balustrade, Kit form ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1IeDM4dG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1IeDM4dG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(3);
		});
		it('should generate 11 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1IeDM4dG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_treads).to.equal(11);
		});
		it('should generate 40-44 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1IeDM4dG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(40,44);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1IeDM4dG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.screws).to.equal(1);
		});
		it('should generate 1 bottom riser', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1IeDM4dG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.bottom_risers).to.equal(1);
		});
	});
	
	//ORDER 48337
	describe("Order 48337 - Double Winder w/ No Handrail, Short Run, Bullnose, Landing Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDgwLTEzLTIzMC04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTItY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU04xNSA0RUwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDgwLTEzLTIzMC04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTItY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU04xNSA0RUwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 31 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDgwLTEzLTIzMC04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTItY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU04xNSA0RUwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.blocks).to.equal(31);
		});
		it('should generate 8-12 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDgwLTEzLTIzMC04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTItY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtU04xNSA0RUwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(22,26);
		});
	});
	
	//ORDER 48353
	describe("Order 48353 - Single Winder w/ Full & Landing balustrade, Curtail&Bullnose ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTE0LTIyMC04NDAtODQwLTg0MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEwLU5hTi1yaWdodC1mdWxsLVJDdXJ0YWlsQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuOC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkg1NUFULWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTE0LTIyMC04NDAtODQwLTg0MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEwLU5hTi1yaWdodC1mdWxsLVJDdXJ0YWlsQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuOC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkg1NUFULWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 13 raking spindles', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTE0LTIyMC04NDAtODQwLTg0MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEwLU5hTi1yaWdodC1mdWxsLVJDdXJ0YWlsQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuOC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkg1NUFULWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.raking_spindles1).to.equal(13);
		});
		it('should generate 14-18 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTE0LTIyMC04NDAtODQwLTg0MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEwLU5hTi1yaWdodC1mdWxsLVJDdXJ0YWlsQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTEuOC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkg1NUFULWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(14,18);
		});
	});
	
	//ORDER 48380
	describe("Order 48380 - Oak Single Winder w/ Glass Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTYwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2Utb2FrLWdsYXNzX2VtYmVkZGVkLTAtMC0wLTAtMC1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtdHcxNTJhci1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 14 Blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTYwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2Utb2FrLWdsYXNzX2VtYmVkZGVkLTAtMC0wLTAtMC1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtdHcxNTJhci1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.blocks).to.equal(14);
		});
		it('should generate 4 loose dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTYwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2Utb2FrLWdsYXNzX2VtYmVkZGVkLTAtMC0wLTAtMC1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtdHcxNTJhci1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.dowels).to.equal(4);
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTYwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2Utb2FrLWdsYXNzX2VtYmVkZGVkLTAtMC0wLTAtMC1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtdHcxNTJhci1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.loose_wedges).to.be.within(10,14);
		});
	});
	
	//ORDER 48390
	describe("Order 48390 - Double Winder w/ No Handrail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTMwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtaHA0M3BzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTMwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtaHA0M3BzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 25 Blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTMwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtaHA0M3BzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(25);
		});
		it('should generate 16-20 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTMwLTEzLTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC02LW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtaHA0M3BzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(16,20);
		});
	});
	
	//ORDER 48432
	describe("Order 48432 - Single Winder w/ Full Balustrade, D-step", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03OTAtNzkwLTc5MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLXJpZ2h0LWZ1bGwtUkRTdGVwLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtY2I3IDVzZi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03OTAtNzkwLTc5MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLXJpZ2h0LWZ1bGwtUkRTdGVwLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtY2I3IDVzZi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 14 Blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03OTAtNzkwLTc5MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLXJpZ2h0LWZ1bGwtUkRTdGVwLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtY2I3IDVzZi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(14);
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEyLTI0MC42My03OTAtNzkwLTc5MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLXJpZ2h0LWZ1bGwtUkRTdGVwLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtY2I3IDVzZi1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(10,14);
		});
	});
	
	//ORDER 48433
	describe("Order 48433 - Kit Form Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(4);
		});
		it('should generate 1 loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_nosing).to.equal(1);
		});
		it('should generate 12 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(12);
		});
		it('should generate 1 Glue Tube', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.glue).to.equal(1);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.screws).to.equal(1);
		});
		it('should generate 44-48 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODMwLTEzLTI0MS43Ny04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTItTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtUzEyIDJRRC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(44,48);
		});
	});
	
	//ORDER 48440
	describe("Order 48440 - Double Winder w/ No Handrail, Extra Newel and 1/2 Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjU1LTE0LTIyMC04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTMtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVE4yMCA2VEQtZmFsc2UtMC0wLTEtMC0xLWhvcml6b250YWwtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjU1LTE0LTIyMC04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTMtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVE4yMCA2VEQtZmFsc2UtMC0wLTEtMC0xLWhvcml6b250YWwtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 4 caps', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjU1LTE0LTIyMC04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTMtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVE4yMCA2VEQtZmFsc2UtMC0wLTEtMC0xLWhvcml6b250YWwtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.full_caps).to.equal(4);
		});
		it('should generate 28 Blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjU1LTE0LTIyMC04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTMtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVE4yMCA2VEQtZmFsc2UtMC0wLTEtMC0xLWhvcml6b250YWwtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.blocks).to.equal(28);
		});
		it('should generate 18-22 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjU1LTE0LTIyMC04NjAtODYwLTg2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTMtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVE4yMCA2VEQtZmFsc2UtMC0wLTEtMC0xLWhvcml6b250YWwtMC0wLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(18,22);
		});
	});
	
	//ORDER 48441
	describe("Order 48441 - Single Winder w/ No Handrail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE1LTIyMS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN0MjE0anQtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE1LTIyMS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN0MjE0anQtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 14 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE1LTIyMS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN0MjE0anQtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(testBL.blocks).to.equal(14);
		});
		it('should generate 2 trenched newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE1LTIyMS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN0MjE0anQtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(testBL.trenched_newels).to.equal(2);
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE1LTIyMS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN0MjE0anQtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(testBL.loose_wedges).to.be.within(10,14);
		});
	});
	
	//ORDER 48444
	describe("Order 48444 - Straight Flight w/ Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzM1LTExLTIzNS43NS02NTAtTmFOLU5hTi1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWdsMTc5ZGgtZmFsc2UtMC0xLTEtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzM1LTExLTIzNS43NS02NTAtTmFOLU5hTi1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWdsMTc5ZGgtZmFsc2UtMC0xLTEtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.blocks).to.equal(3);
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzM1LTExLTIzNS43NS02NTAtTmFOLU5hTi1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWdsMTc5ZGgtZmFsc2UtMC0xLTEtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc3RyYWlnaHQtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48448
	describe("Order 48448 - Qtr Landing w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate no loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate no loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_nosing).to.equal(0);
		});
		it('should generate no loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_treads).to.equal(0);
		});
		it('should generate 2 top risers', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.top_risers).to.equal(2);
		});
		it('should generate at least 4 19mm plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.plugs_19mm).to.be.at.least(4);
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDEwLTExLTI0My4zMy04MDAtODAwLTgwMC1yaWdodC1xdWF0ZXJfc3BhY2Utbm9uZS0zX3dpbmRlci04LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48458
	describe("Order 48458 - Double Winder w/ Balustrade, Bullnose, Complex Offsets", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTk1LTEzLTIyMS43LTc2MC03NjAtNzYwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0yLTMtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tdHJ1ZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtbjcwLTAtMC1uNzAtbnVsbC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 8 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTk1LTEzLTIyMS43LTc2MC03NjAtNzYwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0yLTMtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tdHJ1ZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtbjcwLTAtMC1uNzAtbnVsbC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(8);
		});
		it('should generate 8 winder wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTk1LTEzLTIyMS43LTc2MC03NjAtNzYwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0yLTMtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tdHJ1ZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtbjcwLTAtMC1uNzAtbnVsbC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.winder_wedges).to.equal(8);
		});
		it('should generate 31 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTk1LTEzLTIyMS43LTc2MC03NjAtNzYwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0yLTMtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tdHJ1ZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtbjcwLTAtMC1uNzAtbnVsbC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(31);
		});
		it('should generate 24-28 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTk1LTEzLTIyMS43LTc2MC03NjAtNzYwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0yLTMtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tdHJ1ZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtbjcwLTAtMC1uNzAtbnVsbC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(24,28);
		});
	});
	
	//ORDER 48482
	describe("Order 48482 - 6 Winder Flight w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi0wLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtd2QxOCA3c3MtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 cap', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi0wLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtd2QxOCA3c3MtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.full_caps).to.equal(1);
		});
		it('should generate 14-18 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi0wLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtd2QxOCA3c3MtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(14,18);
		});
		it('should generate 1 newel, jointed', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzAwLTEzLTIzMC42Ny03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi0wLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtd2QxOCA3c3MtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.trenched_newels).to.equal(1);
		});
	});
	
	//ORDER 48484
	describe("Order 48484 - Double Winder w/ Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODU1LTEzLTI0My45MS04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zdG9wX2NoYW1mZXJlZC0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1zYTMgNG5xLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODU1LTEzLTI0My45MS04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zdG9wX2NoYW1mZXJlZC0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1zYTMgNG5xLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 25 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODU1LTEzLTI0My45MS04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zdG9wX2NoYW1mZXJlZC0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1zYTMgNG5xLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.blocks).to.equal(25);
		});
		it('should generate 16-20 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODU1LTEzLTI0My45MS04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zdG9wX2NoYW1mZXJlZC0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1zYTMgNG5xLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_wedges).to.be.within(16,20);
		});
	});
	
	//ORDER 48489
	describe("Order 48489 - Double Winder w/ Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODg1LTE0LTIyOC44Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkczMDJFRy1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA==='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODg1LTE0LTIyOC44Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkczMDJFRy1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA==='));
			expect(testBL.loose_strings).to.equal(3);
		});
		it('should generate 28 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODg1LTE0LTIyOC44Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkczMDJFRy1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA==='));
			expect(testBL.blocks).to.equal(28);
		});
		it('should generate 20-24 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODg1LTE0LTIyOC44Ny03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUkczMDJFRy1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA==='));
			expect(testBL.loose_wedges).to.be.within(20,24);
		});
	});
	
	//ORDER 48505
	describe("Order 48505 - Single Winder w/ No Handrail, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMjgwLTE2LTIyNy42OC04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMTItMC1sZWZ0LXNxdWFyZS1MQnVsbG5vc2UtcGluZTMyLXR1cm5lZC0wLTAtMC0wLTAtcmVkd29vZC1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1sNiA0YnctZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA==='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose string', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMjgwLTE2LTIyNy42OC04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMTItMC1sZWZ0LXNxdWFyZS1MQnVsbG5vc2UtcGluZTMyLXR1cm5lZC0wLTAtMC0wLTAtcmVkd29vZC1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1sNiA0YnctZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA==='));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 14 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMjgwLTE2LTIyNy42OC04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMTItMC1sZWZ0LXNxdWFyZS1MQnVsbG5vc2UtcGluZTMyLXR1cm5lZC0wLTAtMC0wLTAtcmVkd29vZC1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1sNiA0YnctZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA==='));
			expect(testBL.blocks).to.equal(14);
		});
		it('should generate whitewood treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMjgwLTE2LTIyNy42OC04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMTItMC1sZWZ0LXNxdWFyZS1MQnVsbG5vc2UtcGluZTMyLXR1cm5lZC0wLTAtMC0wLTAtcmVkd29vZC1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1sNiA0YnctZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA==='));
			expect(testBL.loose_treads_comment).to.equal('32mm Whitewood');
		});
		it('should generate 10-14 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMjgwLTE2LTIyNy42OC04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMTItMC1sZWZ0LXNxdWFyZS1MQnVsbG5vc2UtcGluZTMyLXR1cm5lZC0wLTAtMC0wLTAtcmVkd29vZC1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1sNiA0YnctZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA==='));
			expect(testBL.loose_wedges).to.be.within(10,14);
		});
	});
	
	//ORDER 48506
	describe("Order 48506 - Kit Form Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(testBL.loose_nosing).to.equal(1);
		});
		it('should generate 1 bottom riser', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(testBL.bottom_risers).to.equal(1);
		});
		it('should generate 4 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(testBL.loose_strings).to.equal(4);
		});
		it('should generate 44-48 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(testBL.loose_wedges).to.be.within(44,48);
		});
		it('should generate 1 Glue Tube', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(testBL.glue).to.equal(1);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODE1LTEzLTI0MC40OS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTMtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1jb2xsZWN0ZWQtTGU5OGRlLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w==='));
			expect(testBL.screws).to.equal(1);
		});
	});
	
	//ORDER 48505
	describe("Order 48553 - Oak Single Winder w/ Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzU1LTEyLTIzNS04ODAtODgwLTg4MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTQtTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLXBpbmUzMi10dXJuZWQtMC0wLTAtMC0wLW9hay1waW5lMzItb2FrLW9hay1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1DYjExNGp4LWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtVHVybmVkU3BpbmRsZS00MS0xMjAtNTgtMS0w==='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 14 raking spindles', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzU1LTEyLTIzNS04ODAtODgwLTg4MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTQtTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLXBpbmUzMi10dXJuZWQtMC0wLTAtMC0wLW9hay1waW5lMzItb2FrLW9hay1vYWstYXNzZW1ibGVkLWRlbGl2ZXJlZC1DYjExNGp4LWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtVHVybmVkU3BpbmRsZS00MS0xMjAtNTgtMS0w==='));
			expect(testBL.raking_spindles1).to.equal(14);
		});
	});
	
	//ORDER 48344 F6
	describe("Order 48344 F6 - Kit Form Double Qtr Landing w/ Full & Landing Balustrade, Short Section, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzc1LTEzLTIzNy4wNy05NDAtOTQwLTk0MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS03LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtcGluZTMyLXNxdWFyZS0zLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLW9hay1raXQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate a 32mm Softwood loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzc1LTEzLTIzNy4wNy05NDAtOTQwLTk0MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS03LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtcGluZTMyLXNxdWFyZS0zLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLW9hay1raXQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_nosing_comment).to.equal("32mm Whitewood");
		});
		it('should generate 32mm Softwood Treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzc1LTEzLTIzNy4wNy05NDAtOTQwLTk0MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS03LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtcGluZTMyLXNxdWFyZS0zLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLW9hay1raXQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads_comment).to.equal("32mm Whitewood");
		});
		it('should generate 9 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzc1LTEzLTIzNy4wNy05NDAtOTQwLTk0MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS03LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtcGluZTMyLXNxdWFyZS0zLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLW9hay1raXQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(9);
		});
		it('should generate 6 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzc1LTEzLTIzNy4wNy05NDAtOTQwLTk0MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS03LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtcGluZTMyLXNxdWFyZS0zLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLW9hay1raXQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(6);
		});
		it('should generate 33 Blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzc1LTEzLTIzNy4wNy05NDAtOTQwLTk0MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS03LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtcGluZTMyLXNxdWFyZS0zLTAtMC0wLTAtcGluZS1waW5lMzItcGluZS1waW5lLW9hay1raXQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(33);
		});
	});
	
	//ORDER 48344 F7
	describe("Order 48344 F7 - Kit Form Single Winder w/ Custom & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODA1LTEzLTIzOS42NC03NTUtNzU1LTc1NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMy0wLTAtMC0xLXBpbmUtcGluZTMyLXBpbmUtcGluZS1vYWsta2l0LWRlbGl2ZXJlZC0tZmFsc2UtMC0wLTAtMC0xLXZlcnRpY2FsLTEtMS0xLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMS0xLTEtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate a 2 lots of raking spindles for different pitches, one with qty 4, one with qty 5', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODA1LTEzLTIzOS42NC03NTUtNzU1LTc1NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMy0wLTAtMC0xLXBpbmUtcGluZTMyLXBpbmUtcGluZS1vYWsta2l0LWRlbGl2ZXJlZC0tZmFsc2UtMC0wLTAtMC0xLXZlcnRpY2FsLTEtMS0xLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMS0xLTEtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.raking_spindles1).to.be.oneOf([4,5]);
			expect(testBL.raking_spindles2).to.be.oneOf([4,5]);
		});
	});
	
	//ORDER 48603
	describe("Order 48603 - Double Winder w/ Full & Landing Balustrade, 2 Short Sections", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzU1LTEzLTIzNS4zNi04OTUtODk1LTg5NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTEtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMy0zLTAtMS0xLXBpbmUtbWRmLXBpbmUtb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLVNPNTMgNFNTLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('Should generate 4 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzU1LTEzLTIzNS4zNi04OTUtODk1LTg5NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTEtcmlnaHQtZnVsbC1ub25lLW1kZi1zcXVhcmUtMy0zLTAtMS0xLXBpbmUtbWRmLXBpbmUtb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLVNPNTMgNFNTLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w='));
			expect(testBL.loose_strings).to.equal(4);
		});
	});
	
	//ORDER 48604
	describe("Order 48604 - Double Qtr Landing w/ Full & Landing Balustrade, Short Section, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTE0LTIzMC04ODUtODg1LTg4NS1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXR1cm5lZC0xLjItMC0wLTAtMS1yZWR3b29kLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('Should generate at least 4 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTE0LTIzMC04ODUtODg1LTg4NS1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTEtY3VzdG9tLWN1c3RvbS1MQnVsbG5vc2UtbWRmLXR1cm5lZC0xLjItMC0wLTAtMS1yZWR3b29kLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVR1cm5lZFNwaW5kbGUtNDEtMTIwLTU4LTEtMA'));
			expect(testBL.loose_strings).to.be.at.least(4);
		});
	});
	
	//ORDER 48614
	describe("Order 48614 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTUwLTEzLTIyMC05MDAtOTAwLTkwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtb2FrLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1vYWstcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC0tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('Should generate no loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTUwLTEzLTIyMC05MDAtOTAwLTkwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtb2FrLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1vYWstcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC0tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_strings).to.be.equal(0);
		});
	});
	
	//ORDER 48566
	describe("Order 48566 - Kit Form 6 Winder w/ No Balustrade ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDAwLTEwLTIyMi4xMi03MzUtNzM1LTczNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtc2cxMiA4YnUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDAwLTEwLTIyMi4xMi03MzUtNzM1LTczNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtc2cxMiA4YnUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_nosing).to.equal(1);
		});
		it('should generate 1 bottom riser', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDAwLTEwLTIyMi4xMi03MzUtNzM1LTczNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtc2cxMiA4YnUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.bottom_risers).to.equal(1);
		});
		it('should generate 5 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDAwLTEwLTIyMi4xMi03MzUtNzM1LTczNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtc2cxMiA4YnUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_strings).to.equal(5);
		});
		it('should generate 9 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDAwLTEwLTIyMi4xMi03MzUtNzM1LTczNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtc2cxMiA4YnUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_treads).to.be.equal(9);
		});
	});
	
	//ORDER 48570
	describe("Order 48570 - All Oak Straight Flight w/ Glass & Landing Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjg1LTEzLTIyOS4zOC0xMDAwLTEwMDAtMTAwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tcmlnaHQtZnVsbC1SQnVsbG5vc2Utb2FrLWdsYXNzX2NsYW1wZWQtMC4xLTIuMDQtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLUl2Mzhldy1mYWxzZS0wLTEtMS0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtR2xhc3MtMTAtMjItNzAtMC0x'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 4 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjg1LTEzLTIyOS4zOC0xMDAwLTEwMDAtMTAwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tcmlnaHQtZnVsbC1SQnVsbG5vc2Utb2FrLWdsYXNzX2NsYW1wZWQtMC4xLTIuMDQtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLUl2Mzhldy1mYWxzZS0wLTEtMS0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtR2xhc3MtMTAtMjItNzAtMC0x'));
			expect(testBL.dowels).to.be.at.least(4);
		});
	});
	
	//ORDER 48571
	describe("Order 48571 F1 - All Oak Straight Flight w/ Glass & Landing Balustrade, Bullnose&Curtail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDEwLTE0LTIzOC43OC04MDAtODAwLTgwMC1ub25lLXF1YXRlcl9zcGFjZS1ub25lLTNfd2luZGVyLTAtTmFOLWxlZnQtZnVsbC1MQ3VydGFpbEJ1bGxub3NlLW1kZi1nbGFzc19lbWJlZGRlZC0wLTAtMC0wLTAtb2FrLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLVc2IDBMWS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtR2xhc3MtMTAtMjItNzAtMC0x'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 4 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDEwLTE0LTIzOC43OC04MDAtODAwLTgwMC1ub25lLXF1YXRlcl9zcGFjZS1ub25lLTNfd2luZGVyLTAtTmFOLWxlZnQtZnVsbC1MQ3VydGFpbEJ1bGxub3NlLW1kZi1nbGFzc19lbWJlZGRlZC0wLTAtMC0wLTAtb2FrLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLVc2IDBMWS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtR2xhc3MtMTAtMjItNzAtMC0x'));
			expect(testBL.dowels).to.be.at.least(4);
		});
	});
	
	//ORDER 48571
	describe("Order 48571 F2 - All Oak Straight Flight w/ Glass & Landing Balustrade, Bullnose&Curtail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTkwLTE0LTIzNy4yLTgwMC04MDAtODAwLW5vbmUtcXVhdGVyX3NwYWNlLW5vbmUtM193aW5kZXItMC1OYU4tcmlnaHQtZnVsbC1SQ3VydGFpbEJ1bGxub3NlLW1kZi1nbGFzc19lbWJlZGRlZC0wLTAtMC0wLTAtb2FrLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLVc2IDBMWS1mYWxzZS0wLTEtMS0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtR2xhc3MtMTAtMjItNzAtMC0x'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 4 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTkwLTE0LTIzNy4yLTgwMC04MDAtODAwLW5vbmUtcXVhdGVyX3NwYWNlLW5vbmUtM193aW5kZXItMC1OYU4tcmlnaHQtZnVsbC1SQ3VydGFpbEJ1bGxub3NlLW1kZi1nbGFzc19lbWJlZGRlZC0wLTAtMC0wLTAtb2FrLW1kZi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLVc2IDBMWS1mYWxzZS0wLTEtMS0wLTAtbm9uZS0wLTEtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtR2xhc3MtMTAtMjItNzAtMC0x'));
			expect(testBL.dowels).to.be.at.least(4);
		});
	});
	
	//ORDER 48585
	describe("Order 48585 - Kit Form Oak/MDF Single Winder w/ Custom Balustrade ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEyLTI0MS4xLTkwMC05MDAtOTAwLXJpZ2h0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1sdTYyaG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 glue tube', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEyLTI0MS4xLTkwMC05MDAtOTAwLXJpZ2h0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1sdTYyaG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.glue).to.equal(1);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEyLTI0MS4xLTkwMC05MDAtOTAwLXJpZ2h0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1sdTYyaG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.screws).to.equal(1);
		});
		it('should generate 6 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEyLTI0MS4xLTkwMC05MDAtOTAwLXJpZ2h0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1sdTYyaG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.dowels).to.equal(6);
		});
		it('should generate 40-44 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjA1LTEyLTI0MS4xLTkwMC05MDAtOTAwLXJpZ2h0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1sdTYyaG4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.loose_wedges).to.be.within(40,44);
		});
	});
	
	//ORDER 48576
	describe("Order 48576 - Qtr Landing -> 3 Winder w/ No Handrail, Bullnose, Extra Newels", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE0LTIyMC04MDAtODAwLTgwMC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTQtMS1jdXN0b20tY3VzdG9tLUJCdWxsbm9zZS1vYWstc3F1YXJlLTAtMC0wLTAtMi1waW5lLW1kZi1vYWstcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSEczIDNERi1mYWxzZS0xLTEtMS0wLTEtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE0LTIyMC04MDAtODAwLTgwMC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTQtMS1jdXN0b20tY3VzdG9tLUJCdWxsbm9zZS1vYWstc3F1YXJlLTAtMC0wLTAtMi1waW5lLW1kZi1vYWstcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSEczIDNERi1mYWxzZS0xLTEtMS0wLTEtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_strings).to.equal(3);
		});
		it('should generate 16 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE0LTIyMC04MDAtODAwLTgwMC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTQtMS1jdXN0b20tY3VzdG9tLUJCdWxsbm9zZS1vYWstc3F1YXJlLTAtMC0wLTAtMi1waW5lLW1kZi1vYWstcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSEczIDNERi1mYWxzZS0xLTEtMS0wLTEtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.dowels).to.equal(16);
		});
		it('should generate oak caps', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE0LTIyMC04MDAtODAwLTgwMC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTQtMS1jdXN0b20tY3VzdG9tLUJCdWxsbm9zZS1vYWstc3F1YXJlLTAtMC0wLTAtMi1waW5lLW1kZi1vYWstcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSEczIDNERi1mYWxzZS0xLTEtMS0wLTEtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.full_caps_material).to.equal("OFCAVC - Oak flat");
		});
	});
	
	//ORDER 48287
	describe("Order 48287 - Oak Straight Flight w/ Full & Landing Balustrade, Bullnose, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTE0LTIyMC04NzAtODcwLTg3MC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTMtTmFOLWN1c3RvbS1jdXN0b20tTEJ1bGxub3NlLW9hay1nbGFzc19lbWJlZGRlZC0zLjEtMC0wLTAtMS1vYWstbWRmLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMC0xLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 6 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjUwLTE0LTIyMC04NzAtODcwLTg3MC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTMtTmFOLWN1c3RvbS1jdXN0b20tTEJ1bGxub3NlLW9hay1nbGFzc19lbWJlZGRlZC0zLjEtMC0wLTAtMS1vYWstbWRmLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMC0xLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE'));
			expect(testBL.dowels).to.be.at.least(6);
		});
	});
	
	//ORDER 48659
	describe("Order 48659 - Kit Form Straight Flight w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMTcwLTExLTIzNS04MDAtODAwLTgwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtdGQ4IDZibC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 glue tube', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMTcwLTExLTIzNS04MDAtODAwLTgwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtdGQ4IDZibC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.glue).to.equal(1);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMTcwLTExLTIzNS04MDAtODAwLTgwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtdGQ4IDZibC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.screws).to.equal(1);
		});
		it('should generate 42-46 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMTcwLTExLTIzNS04MDAtODAwLTgwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTAtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtdGQ4IDZibC1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(42,46);
		});
	});
	
	//ORDER 48712
	describe("Order 48712 Top Winder->Qtr Landing w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzEwLTEzLTIzMS41Mi04NjAtODAwLTkwMC1yaWdodC0zX3dpbmRlci1yaWdodC1xdWF0ZXJfc3BhY2UtOC0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXRuMTEgOWVzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzEwLTEzLTIzMS41Mi04NjAtODAwLTkwMC1yaWdodC0zX3dpbmRlci1yaWdodC1xdWF0ZXJfc3BhY2UtOC0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLXRuMTEgOWVzLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.plugs_19mm).to.be.equal(2);
		});
	});
	
	//ORDER 48648
	describe("Order 48648 - Straight Flight w/ Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDk1LTEyLTIyMC05MDAtOTAwLTkwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTEtTmFOLWxlZnQtZnVsbC1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAuNC0wLTAtMS0wLXBpbmUtbWRmLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4-8 loose wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMDk1LTEyLTIyMC05MDAtOTAwLTkwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItMTEtTmFOLWxlZnQtZnVsbC1ub25lLW1kZi1nbGFzc19jbGFtcGVkLTAuNC0wLTAtMS0wLXBpbmUtbWRmLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE'));
			expect(testBL.loose_wedges).to.be.within(4,8);
		});
	});
	
	//ORDER 48865
	describe("Order 48865 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzAwLTEyLTIzNS03NjUtNzY1LTc2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tbm9uZS1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtcGluZS1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLVBFMjggMEhCLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzAwLTEyLTIzNS03NjUtNzY1LTc2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tbm9uZS1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtcGluZS1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLVBFMjggMEhCLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_nosing).to.equal(1);
		});
		it('should generate 1 Glue tube', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzAwLTEyLTIzNS03NjUtNzY1LTc2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tbm9uZS1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtcGluZS1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLVBFMjggMEhCLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.glue).to.equal(1);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzAwLTEyLTIzNS03NjUtNzY1LTc2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMi1OYU4tbm9uZS1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtcGluZS1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLVBFMjggMEhCLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.screws).to.equal(1);
		});
	});
	
	//ORDER 48938
	describe("Order 48938 - Qtr Landing->3 Winder w/ Full balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzE1LTE2LTIyMC05MjAtOTIwLTkyMC1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtM193aW5kZXItNi0wLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLURkMiA0aHctZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 12 19mm plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzE1LTE2LTIyMC05MjAtOTIwLTkyMC1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtM193aW5kZXItNi0wLXJpZ2h0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLURkMiA0aHctZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.plugs_19mm).to.be.at.least(12);
		});
	});
	
	//ORDER 48542
	describe("Order 48542 - Qtr Landing->3 Winder w/ Full balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjEwLTE0LTIyNS03OTAtNzYwLTgyMC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTAtOS1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXN0b3BfY2hhbWZlcmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLUdVMiA0SlAtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMS0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 5 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjEwLTE0LTIyNS03OTAtNzYwLTgyMC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTAtOS1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXN0b3BfY2hhbWZlcmVkLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLUdVMiA0SlAtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMS0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA='));
			expect(testBL.loose_strings).to.equal(5);
		});
	});
	
	//ORDER 49027
	describe("Order 49027 F1 - S-Shape Double Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzEwLTExLTIzNy4yMy03ODAtNzgwLTc4MC1yaWdodC0zX3dpbmRlci1sZWZ0LTNfd2luZGVyLTAtMy1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLXBpbmUzMi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUZLMTcgIDhMSi1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 6 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzEwLTExLTIzNy4yMy03ODAtNzgwLTc4MC1yaWdodC0zX3dpbmRlci1sZWZ0LTNfd2luZGVyLTAtMy1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLXBpbmUzMi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUZLMTcgIDhMSi1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA='));
			expect(testBL.loose_treads).to.equal(6);
		});
	});
	
	//ORDER 48919 
	describe("Order 48919 - Double Winder w/ Full & Landing Balustrade, Bullnose, 2 Short Sections", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTE0LTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi00LWxlZnQtZnVsbC1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTIuNC0wLTAtMS0xLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtQUw0IDlBSi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNDU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTE0LTIyMC03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMi00LWxlZnQtZnVsbC1MQnVsbG5vc2UtbWRmLXN0b3BfY2hhbWZlcmVkLTIuNC0wLTAtMS0xLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtQUw0IDlBSi1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNDU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(4);
		});
	});
	
	//ORDER 48842
	describe("Order 48842 F2 - Single Winder w/ Full Balustrade, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny05MDAtOTAwLTkwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMS4yLTIuNC0wLTAtMi1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0xLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 Dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny05MDAtOTAwLTkwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMS4yLTIuNC0wLTAtMi1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0xLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.dowels).to.equal(0);
		});
		it('should generate 0 12mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny05MDAtOTAwLTkwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMS4yLTIuNC0wLTAtMi1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0xLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.plugs_12mm).to.equal(0);
		});
		it('should generate at least 8 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQ1LTEzLTIyNS45Ny05MDAtOTAwLTkwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOS1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMS4yLTIuNC0wLTAtMi1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0xLTAtMS0wLW5vbmUtMC0xLTAtMC0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.plugs_19mm).to.be.at.least(8);
		});
	});
	
	//ORDER 49092
	describe("Order 49092 - Double Winder w/ Full, Landing and Outer Balustrade, Bullnose, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE0LTIzNS03ODAtNzUwLTc4MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS0xLWN1c3RvbS1jdXN0b20tQkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTEuOC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1CRDE2IDFMWi1mYWxzZS0xLTEtMS0wLTEtbm9uZS0xLTEtMC0xLW5vbmUtMC0xLTEtMC0wLTEtMS0wLTAtMC0wLTEtMS0xLTEtMS0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 5 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTE0LTIzNS03ODAtNzUwLTc4MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMS0xLWN1c3RvbS1jdXN0b20tQkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTEuOC0xLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1CRDE2IDFMWi1mYWxzZS0xLTEtMS0wLTEtbm9uZS0xLTEtMC0xLW5vbmUtMC0xLTEtMC0wLTEtMS0wLTAtMC0wLTEtMS0xLTEtMS0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(5);
		});
	});
	
	//ORDER 49000
	describe("Order 49000 - Oak Single Winder w/ Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 Bottom riser', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.bottom_risers).to.equal(1);
		});
		it('should generate 13 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(13);
		});
		it('should generate 0 loose bullnose', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_bullnose).to.equal(0);
		});
		it('should generate 41 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(41);
		});
		it('should generate 4 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.dowels).to.equal(4);
		});
		it('should generate 2 trenched newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzgwLTE0LTIyMC41NC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tbGVmdC1mdWxsLUxCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMS0xLW9hay1tZGYtb2FrLW9hay1vYWsta2l0LWRlbGl2ZXJlZC1UTjM5NE5ZLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.trenched_newels).to.equal(2);
		});
	});
	
	//ORDER 49065
	describe("Order 49065 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTAwLTEyLTIzMS4zOC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItNy1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1JRzggN0pELWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTAwLTEyLTIzMS4zOC04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItNy1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1JRzggN0pELWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 49101
	describe("Order 49101 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODIwLTEzLTI0MC45Mi04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZTMyLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLU5uMTEgOHJiLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODIwLTEzLTI0MC45Mi04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZTMyLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLU5uMTEgOHJiLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODIwLTEzLTI0MC45Mi04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZTMyLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLU5uMTEgOHJiLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 49213
	describe("Order 49213 - Kit form Straight Flight w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTAwLTEzLTIyMC04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1yZWR3b29kLXBpbmUtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1DRjcyIDhFVy1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 glue tube', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTAwLTEzLTIyMC04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1yZWR3b29kLXBpbmUtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1DRjcyIDhFVy1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.glue).to.equal(1);
		});
		it('should generate 1 pack of screws', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTAwLTEzLTIyMC04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1yZWR3b29kLXBpbmUtcGluZS1waW5lLXBpbmUta2l0LWRlbGl2ZXJlZC1DRjcyIDhFVy1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1zdHJhaWdodC0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.screws).to.equal(1);
		});
	});
	
	//ORDER 48963
	describe("Order 48963 - Double Qtr Landing w/ Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDMwLTE1LTIyNC4zNC04NjUtODY1LTg2NS1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtcXVhdGVyX3NwYWNlLTgtMC1jdXN0b20tY3VzdG9tLW5vbmUtcGluZTMyLXNxdWFyZS0xLjItMC0wLTAtMS1waW5lLXBpbmUzMi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0wLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 loose nosing', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDMwLTE1LTIyNC4zNC04NjUtODY1LTg2NS1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtcXVhdGVyX3NwYWNlLTgtMC1jdXN0b20tY3VzdG9tLW5vbmUtcGluZTMyLXNxdWFyZS0xLjItMC0wLTAtMS1waW5lLXBpbmUzMi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0wLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_nosing).to.equal(1);
		});
	});
	
	//ORDER 49201
	describe("Order 49201 - Double Winder w/ Full Balustrade, Bullnose&Curtail, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMzQ1LTE2LTIzMi4xOS04NzUtODc1LTg3NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTEtcmlnaHQtZnVsbC1SQ3VydGFpbEJ1bGxub3NlLW1kZi1zcXVhcmUtMS44LTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1wZTMwMWhiLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMzQ1LTE2LTIzMi4xOS04NzUtODc1LTg3NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTEtcmlnaHQtZnVsbC1SQ3VydGFpbEJ1bGxub3NlLW1kZi1zcXVhcmUtMS44LTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1wZTMwMWhiLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 49340
	describe("Order 49340 - 6 Winder w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjE1LTEzLTIyMy40LTg2NS04NjUtODY1LXJpZ2h0LTNfd2luZGVyLXJpZ2h0LTNfd2luZGVyLTMtMC1yaWdodC1mdWxsLW5vbmUtbWRmLXN0b3BfY2hhbWZlcmVkLTAtMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtc2FwZWxlLWFzc2VtYmxlZC1kZWxpdmVyZWQtR2wyNGpiLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 12 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjE1LTEzLTIyMy40LTg2NS04NjUtODY1LXJpZ2h0LTNfd2luZGVyLXJpZ2h0LTNfd2luZGVyLTMtMC1yaWdodC1mdWxsLW5vbmUtbWRmLXN0b3BfY2hhbWZlcmVkLTAtMC0wLTEtMC1waW5lLW1kZi1waW5lLXBpbmUtc2FwZWxlLWFzc2VtYmxlZC1kZWxpdmVyZWQtR2wyNGpiLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.plugs_19mm).to.at.least(12);
		});
	});
	
	//ORDER 49317
	describe("Order 49317 - Single winder w/ Full & Outer Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTEzLTIzMi4zNy03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3RvcF9jaGFtZmVyZWQtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMS0xLTAtMS1ob3Jpem9udGFsLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMS0xLTEtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTEzLTIzMi4zNy03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3RvcF9jaGFtZmVyZWQtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMS0xLTAtMS1ob3Jpem9udGFsLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMS0xLTEtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 49105 
	describe("Order 49105 - Half Landing w/Full & Outer Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy1jb20tMjc4MC0xNy0yNTAtMTIxNS0xMjE1LTEyMTUtbGVmdC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci04LU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0xLjItMy0wLTEtMS1waW5lMzItcGluZTMyLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMS0xLTAtMS1ob3Jpem9udGFsLTAtMC0wLTAtbm9uZS0wLTEtMC0wLTAtMS0xLTAtMC0wLTAtMS0wLTAtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 6 trenched newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy1jb20tMjc4MC0xNy0yNTAtMTIxNS0xMjE1LTEyMTUtbGVmdC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci04LU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0xLjItMy0wLTEtMS1waW5lMzItcGluZTMyLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMS0xLTAtMS1ob3Jpem9udGFsLTAtMC0wLTAtbm9uZS0wLTEtMC0wLTAtMS0xLTAtMC0wLTAtMS0wLTAtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.trenched_newels).to.equal(6);
		});
		it('should generate 40 raking spindles', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy1jb20tMjc4MC0xNy0yNTAtMTIxNS0xMjE1LTEyMTUtbGVmdC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci04LU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0xLjItMy0wLTEtMS1waW5lMzItcGluZTMyLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMS0xLTAtMS1ob3Jpem9udGFsLTAtMC0wLTAtbm9uZS0wLTEtMC0wLTAtMS0xLTAtMC0wLTAtMS0wLTAtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.raking_spindles1).to.equal(40);
		});
	});
	
	//ORDER 49254
	describe("Order 49254 - Double Winder w/ Full & Landing Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzkwLTEzLTIzOC4zNS04MDUtODA1LTgwNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0yLjQtMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MjI1amwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 6 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzkwLTEzLTIzOC4zNS04MDUtODA1LTgwNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0yLjQtMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MjI1amwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_treads).to.equal(6);
		});
		it('should generate 0 loose bullnose', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzkwLTEzLTIzOC4zNS04MDUtODA1LTgwNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0yLjQtMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MjI1amwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_bullnose).to.equal(0);
		});
		it('should generate 2 trenched newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzkwLTEzLTIzOC4zNS04MDUtODA1LTgwNS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtcmlnaHQtZnVsbC1SQnVsbG5vc2UtbWRmLXNxdWFyZS0yLjQtMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MjI1amwtZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.trenched_newels).to.equal(2);
		});
	});
	
	//ORDER 49256
	describe("Order 49256 - 6 Winder w/ Full Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDcwLTEyLTI0MC42LTc1MC03NTAtNzUwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci00LTAtbGVmdC1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMS4yLTAtMC0xLTEtcmVkd29vZC1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtY2E4OWp6LXRydWUtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDcwLTEyLTI0MC42LTc1MC03NTAtNzUwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci00LTAtbGVmdC1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMS4yLTAtMC0xLTEtcmVkd29vZC1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtY2E4OWp6LXRydWUtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 49382
	describe("Order 49340 - 3 Winder w/ Full Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjIwLTEyLTI0Mi40OC04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 6 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjIwLTEyLTI0Mi40OC04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w='));
			expect(testBL.plugs_19mm).to.at.least(6);
		});
	});
	
	//ORDER 49309
	describe("Order 49309 - 6 Winder w/ No Handrail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTEzLTIyOC45Ni04NTUtODQwLTg1NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcmc3LWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 4 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjgwLTEzLTIyOC45Ni04NTUtODQwLTg1NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcmc3LWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w='));
			expect(testBL.plugs_19mm).to.at.least(4);
		});
	});
	
	//ORDER 49286 
	describe("Order 49286 - 6 Winder w/ Full, Landing & Outer Balustrade, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODI1LTEzLTI1Ni4zNC03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3M5IDJMUC1mYWxzZS0xLTEtMS0xLTEtbm9uZS0wLTEtMS0wLW5vbmUtMC0xLTEtMS0xLTEtMS0wLTAtMS0xLTEtMC0xLTEtMC0wLTEtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODI1LTEzLTI1Ni4zNC03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3M5IDJMUC1mYWxzZS0xLTEtMS0xLTEtbm9uZS0wLTEtMS0wLW5vbmUtMC0xLTEtMS0xLTEtMS0wLTAtMS0xLTEtMC0xLTEtMC0wLTEtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 6 caps', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODI1LTEzLTI1Ni4zNC03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3M5IDJMUC1mYWxzZS0xLTEtMS0xLTEtbm9uZS0wLTEtMS0wLW5vbmUtMC0xLTEtMS0xLTEtMS0wLTAtMS0xLTEtMC0xLTEtMC0wLTEtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.full_caps).to.equal(6);
		});
		it('should generate 6 full newels and 1 double newel', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODI1LTEzLTI1Ni4zNC03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3M5IDJMUC1mYWxzZS0xLTEtMS0xLTEtbm9uZS0wLTEtMS0wLW5vbmUtMC0xLTEtMS0xLTEtMS0wLTAtMS0xLTEtMC0xLTEtMC0wLTEtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.trenched_newels).to.equal(6);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
		it('should generate 1 half newel', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODI1LTEzLTI1Ni4zNC03OTAtNzkwLTc5MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3M5IDJMUC1mYWxzZS0xLTEtMS0xLTEtbm9uZS0wLTEtMS0wLW5vbmUtMC0xLTEtMS0xLTEtMS0wLTAtMS0xLTEtMC0xLTEtMC0wLTEtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.trenched_half_newels).to.equal(1);
		});
	});
	
	//ORDER 49322
	describe("Order 49322 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTY1LTEzLTIyMC04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSXYzMCA2ZXQtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTY1LTEzLTIyMC04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSXYzMCA2ZXQtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTY1LTEzLTIyMC04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMS0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSXYzMCA2ZXQtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 49344
	describe("Order 49344 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzU1LTEzLTIzNS4zNi04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC13MTIgOGFoLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzU1LTEzLTIzNS4zNi04NjUtODY1LTg2NS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItOC1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC13MTIgOGFoLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 49352
	describe("Order 49352 -Single Winder w/ No Balustrade ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDUwLTE0LTI0My45NS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc2E0NCA2ZGctZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDUwLTE0LTI0My45NS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc2E0NCA2ZGctZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate 3 Loose Treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0zMDUwLTE0LTI0My45NS03NTAtNzUwLTc1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTEtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc2E0NCA2ZGctZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 49418
	describe("Order 49418 - Single Winder w/ Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzEwLTExLTIzMy4yMy04MjAtODIwLTgyMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItNi1OYU4tbGVmdC1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMi40LTEuMi0wLTItMS1yZWR3b29kLXBpbmUtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1tazQzMGxuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzEwLTExLTIzMy4yMy04MjAtODIwLTgyMC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItNi1OYU4tbGVmdC1mdWxsLW5vbmUtcGluZS1zcXVhcmUtMi40LTEuMi0wLTItMS1yZWR3b29kLXBpbmUtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1tazQzMGxuLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXNpbmdsZS0wLTAtMC0wLVNURC0tdHJ1ZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 49601
	describe("Order 49601 - 6 Winder w/ Custom Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04NTUtODU1LTg1NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMS44LTEuMi0wLTItMi1waW5lLW1kZi1waW5lLXBpbmUtb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3k4IDNhci1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate at least 8 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjQwLTEzLTIyNS41NC04NTUtODU1LTg1NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTAtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMS44LTEuMi0wLTItMi1waW5lLW1kZi1waW5lLXBpbmUtb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3k4IDNhci1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMC0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.plugs_19mm).to.be.at.least(8);
		});
	});
	
	//ORDER 49515
	describe("Order 49515 - Double Qtr Landing w/ Full Balustrade, Short Section, Under 850 Overall", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTAwLTE1LTIyMC03NTAtNzUwLTc1MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTEtbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0xLjItMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLU1lMjNieC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTAwLTE1LTIyMC03NTAtNzUwLTc1MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTEtbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0xLjItMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLU1lMjNieC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 14-18 wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTAwLTE1LTIyMC03NTAtNzUwLTc1MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTEtbGVmdC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0xLjItMC0wLTEtMS1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLU1lMjNieC1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_wedges).to.be.within(14,18);
		});
	});
	
	//ORDER 49574
	describe("Order 49574 - Double Qtr Landing w/ Full Balustrade, 2 Short Sections, Under 850 Overall", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTg1LTEzLTIyMC44NC04MzAtODMwLTgzMC1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtcXVhdGVyX3NwYWNlLTEtMS1yaWdodC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTEuOC0wLTEtMy1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 Loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTg1LTEzLTIyMC44NC04MzAtODMwLTgzMC1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtcXVhdGVyX3NwYWNlLTEtMS1yaWdodC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTEuOC0wLTEtMy1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.loose_strings).to.equal(4);
		});
		it('should generate 14 raking spindles', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTg1LTEzLTIyMC44NC04MzAtODMwLTgzMC1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtcXVhdGVyX3NwYWNlLTEtMS1yaWdodC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTEuOC0wLTEtMy1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.raking_spindles1).to.equal(14);
		});
		it('should generate 16-20 wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTg1LTEzLTIyMC44NC04MzAtODMwLTgzMC1yaWdodC1xdWF0ZXJfc3BhY2UtcmlnaHQtcXVhdGVyX3NwYWNlLTEtMS1yaWdodC1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTEuOC0wLTEtMy1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtY29sbGVjdGVkLS1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA'));
			expect(testBL.loose_wedges).to.be.within(16,20);
		});
	});
	
	//ORDER 49584
	describe("Order 49584 - 6 Winder w/ No Balustrade, Bullnose, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDUwLTEzLTIyMC04MjAtODIwLTgyMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTAtY3VzdG9tLWN1c3RvbS1MRFN0ZXAtbWRmLWdsYXNzX2NsYW1wZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRFQ4IDNITi1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 newels and 1 jointed newel', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDUwLTEzLTIyMC04MjAtODIwLTgyMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTAtY3VzdG9tLWN1c3RvbS1MRFN0ZXAtbWRmLWdsYXNzX2NsYW1wZWQtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtRFQ4IDNITi1mYWxzZS0xLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.trenched_newels).to.equal(2);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
	});
	
	//ORDER 49591
	describe("Order 49591 - S-shape w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODAwLTEzLTIzOS4yMS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1sZWZ0LTNfd2luZGVyLTMtMS1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0xLjgtMC0wLTAtMS1waW5lLXBpbmUzMi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUhnMyAxcmotZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODAwLTEzLTIzOS4yMS04MDAtODAwLTgwMC1yaWdodC0zX3dpbmRlci1sZWZ0LTNfd2luZGVyLTMtMS1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0xLjgtMC0wLTAtMS1waW5lLXBpbmUzMi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUhnMyAxcmotZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 49465
	describe("Order 49465 - Double Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTE0LTIyMC05MDAtOTAwLTkwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTUtbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVHcxMCA3cXkgLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzIwLTE0LTIyMC05MDAtOTAwLTkwMC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTUtbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtVHcxMCA3cXkgLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(0);
		});
	});
	
	//ORDER 49655
	describe("Order 49655 - Double Winder w/ No Balustrade, 1 Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODY1LTE0LTIyNy4yOC04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTEtbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1CQTE2VFEtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODY1LTE0LTIyNy4yOC04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0zLTEtbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1CQTE2VFEtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 49700
	describe("Order 49700 - Qtr Land->3Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTEzLTIzNi42NS03NTAtNzUwLTc1MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTMtMC1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTQtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLVJoMTVhYi1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 jointed newel', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTEzLTIzNi42NS03NTAtNzUwLTc1MC1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LTNfd2luZGVyLTMtMC1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTQtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1raXQtZGVsaXZlcmVkLVJoMTVhYi1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.trenched_newels).to.equal(1);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
	});
	
	//ORDER 49662
	describe("Order 49662 - ", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LXNxdWFyZS1MRFN0ZXAtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtb2FrLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWt0MTMgOHF3LWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate oak caps', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi04NjUtODY1LTg2NS1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LXNxdWFyZS1MRFN0ZXAtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtb2FrLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWt0MTMgOHF3LWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.full_caps_material).to.equal("OFCAVC - Oak flat");
		});
	});
	
	//ORDER 49684
	describe("Order 49684 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMjMwLTExLTIyNi4xNS04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0xLjgtMC0wLTItMS1yZWR3b29kLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUN2OCAzaHUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMjMwLTExLTIyNi4xNS04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0xLjgtMC0wLTItMS1yZWR3b29kLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUN2OCAzaHUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMjMwLTExLTIyNi4xNS04ODAtODgwLTg4MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0xLjgtMC0wLTItMS1yZWR3b29kLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLUN2OCAzaHUtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 49760
	describe("Order 49760 - Oak Single Winder w/ Full Balustrade, Bullnose & Curtail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjc1LTEzLTIyOC41My04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTQtMC1yaWdodC1mdWxsLVJDdXJ0YWlsQnVsbG5vc2Utb2FrLWdsYXNzX2VtYmVkZGVkLTIuMzItMC0wLTEtMS1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtcG8xNiA3dXctZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 6 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjc1LTEzLTIyOC41My04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTQtMC1yaWdodC1mdWxsLVJDdXJ0YWlsQnVsbG5vc2Utb2FrLWdsYXNzX2VtYmVkZGVkLTIuMzItMC0wLTEtMS1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtcG8xNiA3dXctZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(testBL.dowels).to.equal(6);
		});
	});
	
	//ORDER 49895
	describe("Order 49895 - 6 Winder w/ Full Balustrade, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTA1LTEzLTIyMC04MTUtODE1LTgxNS1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1waW5lLXNxdWFyZS0xLjgtMS4yLTAtMC0xLXJlZHdvb2QtcGluZS1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 newels with 1 jointed', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTA1LTEzLTIyMC04MTUtODE1LTgxNS1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLWN1c3RvbS1jdXN0b20tbm9uZS1waW5lLXNxdWFyZS0xLjgtMS4yLTAtMC0xLXJlZHdvb2QtcGluZS1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLS1mYWxzZS0xLTAtMC0xLTAtbm9uZS0wLTAtMS0wLW5vbmUtMC0xLTEtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.trenched_newels).to.equal(4);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
	});
	
	//ORDER 49818
	describe("Order 49818 - Single Winder w/ No Handrail, Extra Outer Newels", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTYwLTEyLTIzNi45My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtZXgzMSAzZXUtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTYwLTEyLTIzNi45My03NTAtNzUwLTc1MC1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMC1OYU4tY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtZXgzMSAzZXUtZmFsc2UtMS0wLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTAtMS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 49763
	describe("Order 49763 - Half Landing w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTE0LTIyMC04MzUtODM1LTgzNS1yaWdodC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci02LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWRhMTIyam4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 Loose Nosings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTE0LTIyMC04MzUtODM1LTgzNS1yaWdodC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci02LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWRhMTIyam4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_nosing).to.equal(2);
		});
		it('should generate 0 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzcwLTE0LTIyMC04MzUtODM1LTgzNS1yaWdodC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci02LU5hTi1ub25lLWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTAtMC0wLTAtMC1waW5lLW1kZi1waW5lLXBpbmUtcGluZS1hc3NlbWJsZWQtZGVsaXZlcmVkLWRhMTIyam4tZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA'));
			expect(testBL.loose_strings).to.equal(0);
		});
	});
	
	//ORDER 50013
	describe("Order 50013 - Oak Straight Flight w/ Full Balustrade, Curtail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjYwLTEzLTIyNy4yNS05MDAtOTAwLTkwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtTERTdGVwLW1kZi1zdG9wX2NoYW1mZXJlZC0xLjgtMC0wLTAtMS1vYWstbWRmLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtQnM4M3RwLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 Dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjYwLTEzLTIyNy4yNS05MDAtOTAwLTkwMC1ub25lLTNfd2luZGVyLW5vbmUtM193aW5kZXItTmFOLU5hTi1sZWZ0LWZ1bGwtTERTdGVwLW1kZi1zdG9wX2NoYW1mZXJlZC0xLjgtMC0wLTAtMS1vYWstbWRmLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtQnM4M3RwLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLXN0cmFpZ2h0LTAtMC0wLTAtU1RELS1mYWxzZS1TQ1NwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.dowels).to.equal(4);
		});
	});
	
	//ORDER 50033
	describe("Order 50033 - Single Winder w/ No Balustrade, Complex Offsets", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE0LTIzMC44NS03MzAtNzMwLTczMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLW41OS0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE0LTIzMC44NS03MzAtNzMwLTczMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLW41OS0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_treads).to.equal(3);
		});
		it('should generate 4 winder wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE0LTIzMC44NS03MzAtNzMwLTczMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1jb2xsZWN0ZWQtLWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXNpbmdsZS0wLW41OS0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.winder_wedges).to.equal(4);
		});
	});
	
	//ORDER 50142
	describe("Order 50142 - Double Winder w/ Full Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQ1LTE0LTIyNS42OS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0xLWxlZnQtZnVsbC1ub25lLXBpbmUtc3RvcF9jaGFtZmVyZWQtNC4yLTAtMC0wLTAtcGluZS1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtdWIyNXJnLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODQ1LTE0LTIyNS42OS04MDAtODAwLTgwMC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0xLWxlZnQtZnVsbC1ub25lLXBpbmUtc3RvcF9jaGFtZmVyZWQtNC4yLTAtMC0wLTAtcGluZS1waW5lLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtdWIyNXJnLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0xLTAtbm9uZS0wLTEtMC0xLTAtMS0wLTAtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(2);
		});
	});
	
	//ORDER 50155
	describe("Order 50155 - Double Winder w/ Full Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjMwLTEzLTIyNC42OS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC0xLWxlZnQtZnVsbC1ub25lLW1kZi10dXJuZWQtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtTlIxNCA3VE4tZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjMwLTEzLTIyNC42OS04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMC0xLWxlZnQtZnVsbC1ub25lLW1kZi10dXJuZWQtMC0wLTAtMC0wLXJlZHdvb2QtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtTlIxNCA3VE4tZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtZG91YmxlLTAtMC0wLTAtU1RELS1mYWxzZS1UdXJuZWRTcGluZGxlLTQxLTEyMC01OC0xLTA='));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 50240
	describe("Order 50240 - Double Qtr Landing w/ No Balustrade, Over 850 Overall", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy1zYy0yNzYwLTE0LTIyNS05MjUtOTI1LTkyNS1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTAtbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1hYjU1IDRlSi1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy1zYy0yNzYwLTE0LTIyNS05MjUtOTI1LTkyNS1sZWZ0LXF1YXRlcl9zcGFjZS1sZWZ0LXF1YXRlcl9zcGFjZS02LTAtbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1hYjU1IDRlSi1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 50349
	describe("Order 50349 - Double Winder w/ Full Balustrade, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODc1LTE0LTIyOC4wNy03NjAtNzYwLTc2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMi40LTAtMC0wLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1FNCA4U1ItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODc1LTE0LTIyOC4wNy03NjAtNzYwLTc2MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0wLTYtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMi40LTAtMC0wLTEtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1FNCA4U1ItZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0xLTAtMS0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtMC0wLTEtZG91YmxlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 50367
	describe("Order 50367 - T-Shape w/ Full Balustrade on All Sides, Bullnose&Curtail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDM1LTExLTI0NS44NS0xMDMwLTEwMzAtMTAzMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLUJDdXJ0YWlsQnVsbG5vc2Utb2FrLXNxdWFyZS0wLTAtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MzUtZmFsc2UtMS0xLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTEtMS0xLTEtMC0xLTEtMC0xLTEtMS0wLTAtMS0wLTAtMC0xLTEtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 Loose Nosings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDM1LTExLTI0NS44NS0xMDMwLTEwMzAtMTAzMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLUJDdXJ0YWlsQnVsbG5vc2Utb2FrLXNxdWFyZS0wLTAtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MzUtZmFsc2UtMS0xLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTEtMS0xLTEtMC0xLTEtMC0xLTEtMS0wLTAtMS0wLTAtMC0xLTEtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_nosing).to.equal(2);
		});
		it('should generate 1 Landing board', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDM1LTExLTI0NS44NS0xMDMwLTEwMzAtMTAzMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLUJDdXJ0YWlsQnVsbG5vc2Utb2FrLXNxdWFyZS0wLTAtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MzUtZmFsc2UtMS0xLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTEtMS0xLTEtMC0xLTEtMC0xLTEtMS0wLTAtMS0wLTAtMC0xLTEtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.landing_boards).to.equal(1);
		});
		it('should generate 6 top risers', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDM1LTExLTI0NS44NS0xMDMwLTEwMzAtMTAzMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLUJDdXJ0YWlsQnVsbG5vc2Utb2FrLXNxdWFyZS0wLTAtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MzUtZmFsc2UtMS0xLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTEtMS0xLTEtMC0xLTEtMC0xLTEtMS0wLTAtMS0wLTAtMC0xLTEtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.top_risers).to.equal(6);
		});
		it('should generate 10 newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDM1LTExLTI0NS44NS0xMDMwLTEwMzAtMTAzMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLUJDdXJ0YWlsQnVsbG5vc2Utb2FrLXNxdWFyZS0wLTAtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MzUtZmFsc2UtMS0xLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTEtMS0xLTEtMC0xLTEtMC0xLTEtMS0wLTAtMS0wLTAtMC0xLTEtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.trenched_newels).to.equal(10);
		});
		it('should generate 20 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDM1LTExLTI0NS44NS0xMDMwLTEwMzAtMTAzMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLUJDdXJ0YWlsQnVsbG5vc2Utb2FrLXNxdWFyZS0wLTAtMC0wLTAtb2FrLW9hay1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWN2MzUtZmFsc2UtMS0xLTAtMS0wLW5vbmUtMS0xLTEtMC1ub25lLTEtMS0xLTEtMC0xLTEtMC0xLTEtMS0wLTAtMS0wLTAtMC0xLTEtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(20);
		});
	});
	
	//ORDER 50435
	describe("Order 50435 - Double Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTQwLTEyLTIzNS4wOC04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTQtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3k4MXh6LWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 Loose String', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTQwLTEyLTIzNS4wOC04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTQtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3k4MXh6LWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_strings).to.equal(1);
		});
		it('should generate 6 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTQwLTEyLTIzNS4wOC04NjUtODY1LTg2NS1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci0xLTQtY3VzdG9tLWN1c3RvbS1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtc3k4MXh6LWZhbHNlLTAtMC0wLTAtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0xLTAtMC0wLWRvdWJsZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_treads).to.equal(6);
		});
	});
	
	//ORDER 50454
	describe("Order 50454 - Single Winder w/ Full Balustrade, Bullnose", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTkwLTEzLTIyMS4yNy04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW9hay1zdG9wX2NoYW1mZXJlZC0xLjItMC0wLTEtMS1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtTkUyNCA1LWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 dowels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTkwLTEzLTIyMS4yNy04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTktTmFOLXJpZ2h0LWZ1bGwtUkJ1bGxub3NlLW9hay1zdG9wX2NoYW1mZXJlZC0xLjItMC0wLTEtMS1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtTkUyNCA1LWZhbHNlLTAtMS0wLTAtMC1ub25lLTAtMS0wLTAtbm9uZS0wLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLXNpbmdsZS0wLTAtMC0wLVNURC0tZmFsc2UtU0NTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.dowels).to.equal(4);
		});
	});
	
	//ORDER 50455
	describe("Order 50455 - T-shape w/ Custom Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 Landing Board', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.landing_boards).to.equal(1);
		});
		it('should generate 5 top risers', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.top_risers).to.equal(5);
		});
		it('should generate 5 newels', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.trenched_newels).to.equal(5);
		});
		it('should generate 12-16 Loose Wedges', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.loose_wedges).to.be.within(12,16);
		});
		it('should generate 12 blocks', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.blocks).to.equal(12);
		});
		it('should generate at least 16 19mm Plugs', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzUwLTEyLTIyMC05MDAtOTAwLTkwMC1sZWZ0LXRfc2hhcGUtbm9uZS0zX3dpbmRlci04LU5hTi1sZWZ0LWZ1bGwtbm9uZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0xLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtcGUyMyA0ZGItZmFsc2UtMS0wLTAtMS0wLW5vbmUtMC0wLTEtMC1ub25lLTAtMS0wLTEtMC0xLTAtMC0wLTEtMC0wLTAtMS0wLTAtMC0xLTAtdF9zaGFwZS0wLTAtMC0wLVNURC0tZmFsc2UtU3F1YXJlU3BpbmRsZS00MS0xNDAtNTgtMC0w'));
			expect(testBL.plugs_19mm).to.be.at.least(16);
		});
	});
	
	//ORDER 50456
	describe("Order 50456 - Single Winder w/ No balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzA1LTExLTIzMi43Mi04MzUtODM1LTgzNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1jbzg1aHotZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzA1LTExLTIzMi43Mi04MzUtODM1LTgzNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1jbzg1aHotZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yMzA1LTExLTIzMi43Mi04MzUtODM1LTgzNS1sZWZ0LTNfd2luZGVyLW5vbmUtM193aW5kZXItMS1OYU4tbm9uZS1mdWxsLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1jbzg1aHotZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 50491
	describe("Order 50491 - Single Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTkwLTEzLTIyMS4yNy04OTAtODkwLTg5MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTgtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUGUxMTJiYS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTkwLTEzLTIyMS4yNy04OTAtODkwLTg5MC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTgtTmFOLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtUGUxMTJiYS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1zaW5nbGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_treads).to.equal(3);
		});
	});
	
	//ORDER 50533
	describe("Order 50533 - Single Winder w/ Full & Outer Balustrade, Extra Newels, Bullnose, Short Section", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDMwLTEyLTIyNC45LTgzMC04MzAtODMwLWxlZnQtM193aW5kZXItbm9uZS0zX3dpbmRlci0yLU5hTi1jdXN0b20tY3VzdG9tLUJCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWVuNSAzYmQtZmFsc2UtMS0xLTEtMC0xLWhvcml6b250YWwtMC0xLTEtMC1ub25lLTAtMC0wLTAtMC0xLTEtMS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNDMwLTEyLTIyNC45LTgzMC04MzAtODMwLWxlZnQtM193aW5kZXItbm9uZS0zX3dpbmRlci0yLU5hTi1jdXN0b20tY3VzdG9tLUJCdWxsbm9zZS1tZGYtc3F1YXJlLTEuMi0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLWVuNSAzYmQtZmFsc2UtMS0xLTEtMC0xLWhvcml6b250YWwtMC0xLTEtMC1ub25lLTAtMC0wLTAtMC0xLTEtMS0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 50569
	describe("Order 50569 - Double Winder w/ Full Balustrade, Bullnose, Short Section, Extra Newel", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzI1LTEzLTIzMi44LTgwMC04MDAtODAwLXJpZ2h0LTNfd2luZGVyLXJpZ2h0LTNfd2luZGVyLTEtNC1jdXN0b20tY3VzdG9tLVJCdWxsbm9zZS1tZGYtdHVybmVkLTMtMS4yLTAtMS0yLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSFAzIDBEUy1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtVHVybmVkU3BpbmRsZS00MS0xMjAtNTgtMS0w'));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 3 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNzI1LTEzLTIzMi44LTgwMC04MDAtODAwLXJpZ2h0LTNfd2luZGVyLXJpZ2h0LTNfd2luZGVyLTEtNC1jdXN0b20tY3VzdG9tLVJCdWxsbm9zZS1tZGYtdHVybmVkLTMtMS4yLTAtMS0yLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWFzc2VtYmxlZC1kZWxpdmVyZWQtSFAzIDBEUy1mYWxzZS0wLTEtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0xLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLXRydWUtVHVybmVkU3BpbmRsZS00MS0xMjAtNTgtMS0w'));
			expect(testBL.loose_strings).to.equal(3);
		});
	});
	
	//ORDER 50594
	describe("Order 50594 - 6 Winder w/ Full and Outer Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE2LTIzNS04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTAtY3VzdG9tLWN1c3RvbS1ub25lLXBpbmUzMi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLXBpbmUzMi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXc2IDBseS1mYWxzZS0xLTEtMS0wLTEtaG9yaXpvbnRhbC0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTEtMS0wLTAtMC0xLTEtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 2 Loose Strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE2LTIzNS04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTAtY3VzdG9tLWN1c3RvbS1ub25lLXBpbmUzMi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLXBpbmUzMi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXc2IDBseS1mYWxzZS0xLTEtMS0wLTEtaG9yaXpvbnRhbC0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTEtMS0wLTAtMC0xLTEtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.loose_strings).to.equal(2);
		});
		it('should generate 5 newels with 1 jointed', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTEwLTE2LTIzNS04NTAtODUwLTg1MC1yaWdodC0zX3dpbmRlci1yaWdodC0zX3dpbmRlci00LTAtY3VzdG9tLWN1c3RvbS1ub25lLXBpbmUzMi1nbGFzc19jbGFtcGVkLTAtMC0wLTAtMC1waW5lLXBpbmUzMi1vYWstb2FrLW9hay1hc3NlbWJsZWQtZGVsaXZlcmVkLXc2IDBseS1mYWxzZS0xLTEtMS0wLTEtaG9yaXpvbnRhbC0wLTAtMC0wLW5vbmUtMC0wLTEtMC0xLTEtMS0wLTAtMC0xLTEtMC0wLTEtMC0wLTAtMS1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLUdsYXNzLTEwLTIyLTcwLTAtMQ=='));
			expect(testBL.trenched_newels).to.equal(5);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
	});
	
	//ORDER 50596
	describe("Order 50596 - Double Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODM1LTEzLTI0Mi4yLTkyMC05MjAtOTIwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0xLTItbm9uZS1mdWxsLW5vbmUtcGluZTMyLXNxdWFyZS0wLTAtMC0yLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1rdDEwIDhkYiAtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 0 loose strings', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODM1LTEzLTI0Mi4yLTkyMC05MjAtOTIwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0xLTItbm9uZS1mdWxsLW5vbmUtcGluZTMyLXNxdWFyZS0wLTAtMC0yLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1rdDEwIDhkYiAtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_strings).to.equal(0);
		});
		it('should generate 6 loose treads', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yODM1LTEzLTI0Mi4yLTkyMC05MjAtOTIwLWxlZnQtM193aW5kZXItbGVmdC0zX3dpbmRlci0xLTItbm9uZS1mdWxsLW5vbmUtcGluZTMyLXNxdWFyZS0wLTAtMC0yLTAtcGluZS1waW5lMzItcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1rdDEwIDhkYiAtZmFsc2UtMC0wLTAtMC0wLW5vbmUtMC0wLTAtMC1ub25lLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtZG91YmxlLTAtMC0wLTAtU1RELS10cnVlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.loose_treads).to.equal(6);
		});
	});
	
	//ORDER 50611
	describe("Order 50611 - 6 Winder w/ No Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTUwLTEzLTIyMC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtV1IxNDNKUS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 1 jointed newel', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNTUwLTEzLTIyMC04NTAtODUwLTg1MC1sZWZ0LTNfd2luZGVyLWxlZnQtM193aW5kZXItMy0wLW5vbmUtZnVsbC1ub25lLW1kZi1zcXVhcmUtMC0wLTAtMC0wLXBpbmUtbWRmLXBpbmUtcGluZS1waW5lLWtpdC1kZWxpdmVyZWQtV1IxNDNKUS1mYWxzZS0wLTAtMC0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.trenched_newels).to.equal(1);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
	});
	
	//ORDER 50643
	describe("Order 50643 - Single Winder w/ No HR, Bullnose & Curtail", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi05MDAtOTAwLTkwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTUtTmFOLXJpZ2h0LXNxdWFyZS1SQ3VydGFpbEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate Oak Caps', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yNjAwLTEzLTIyMi4xMi05MDAtOTAwLTkwMC1yaWdodC0zX3dpbmRlci1ub25lLTNfd2luZGVyLTUtTmFOLXJpZ2h0LXNxdWFyZS1SQ3VydGFpbEJ1bGxub3NlLW1kZi1zcXVhcmUtMC0wLTAtMi0wLXBpbmUtbWRmLW9hay1waW5lLXBpbmUtYXNzZW1ibGVkLWNvbGxlY3RlZC0tZmFsc2UtMC0xLTAtMC0wLW5vbmUtMC0xLTAtMC1ub25lLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtc2luZ2xlLTAtMC0wLTAtU1RELS1mYWxzZS1TcXVhcmVTcGluZGxlLTQxLTE0MC01OC0wLTA='));
			expect(testBL.full_caps_material).to.equal("OFCAVC - Oak flat");
		});
	});
	
	//ORDER 50568
	describe("Order 50568 - Half Landing w/ No Handrail, Custom Newel Posts", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTIwLTE0LTIzMS42NC04NjUtODY1LTg2NS1yaWdodC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci0zLU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1ndTM0IDNqeC1mYWxzZS0xLTAtMS0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate 4 Newels with 1 Jointed', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0yOTIwLTE0LTIzMS42NC04NjUtODY1LTg2NS1yaWdodC1oYWxmX3R1cm4tbm9uZS0zX3dpbmRlci0zLU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLXNxdWFyZS0wLTAtMC0wLTAtcGluZS1tZGYtcGluZS1waW5lLXBpbmUtYXNzZW1ibGVkLWRlbGl2ZXJlZC1ndTM0IDNqeC1mYWxzZS0xLTAtMS0wLTAtbm9uZS0wLTAtMC0wLW5vbmUtMC0wLTEtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC1kb3VibGUtMC0wLTAtMC1TVEQtLWZhbHNlLVNxdWFyZVNwaW5kbGUtNDEtMTQwLTU4LTAtMA=='));
			expect(testBL.trenched_newels).to.equal(4);
			expect(testBL.trenched_newels_comment).to.equal("1x Jointed");
		});
	});
	
	//ORDER 51183
	describe("Order 51183 - Straight Open Plan w/ Full Balustrade", function(){
		it('should generate a bitlist for this job.', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0xNTEwLTgtMjIwLTkwMC05MDAtOTAwLW5vbmUtM193aW5kZXItbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLWdsYXNzX2VtYmVkZGVkLTAtMC0wLTAtMC1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXN0cmFpZ2h0LTAtMC0wLTAtT25OLS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(typeof(testBL.bits_notes)).to.equal('string');
		});
		it('should generate a 22mm Top Riser', function() {
			var testBL = genBitlist(findStairObject('dmVyc2lvbjIuMy11ay0xNTEwLTgtMjIwLTkwMC05MDAtOTAwLW5vbmUtM193aW5kZXItbm9uZS0zX3dpbmRlci03LU5hTi1jdXN0b20tY3VzdG9tLW5vbmUtbWRmLWdsYXNzX2VtYmVkZGVkLTAtMC0wLTAtMC1vYWstb2FrLW9hay1vYWstb2FrLWFzc2VtYmxlZC1kZWxpdmVyZWQtLWZhbHNlLTEtMC0wLTEtMC1ub25lLTAtMC0wLTAtbm9uZS0wLTAtMC0xLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLTAtMC0wLXN0cmFpZ2h0LTAtMC0wLTAtT25OLS1mYWxzZS1HbGFzcy0xMC0yMi03MC0wLTE='));
			expect(testBL.top_risers_material).to.equal("22mm Solid Oak");
		});
	});
});