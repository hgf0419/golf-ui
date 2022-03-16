export default function(){
    return /(iPhone|iPad|Android|IEMobile)/ig.test(navigator.userAgent || '');
}