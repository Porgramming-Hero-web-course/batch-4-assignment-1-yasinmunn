
function removeDuplicates(nums: number[]): number[] {
    let notDuplicate: number[] = []; 
    for (let i = 0; i < nums.length; i++) {
      if (!notDuplicate.includes(nums[i])) {
        notDuplicate.push(nums[i]); 
      }
    }
    return notDuplicate; 
  }
  
  