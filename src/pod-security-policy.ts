// https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#id PodSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#metadata PodSecurityPolicy#metadata}
  */
  readonly metadata: PodSecurityPolicyMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#spec PodSecurityPolicy#spec}
  */
  readonly spec: PodSecurityPolicySpec;
}
export interface PodSecurityPolicyMetadata {
  /**
  * An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#annotations PodSecurityPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#labels PodSecurityPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#name PodSecurityPolicy#name}
  */
  readonly name?: string;
}

export function podSecurityPolicyMetadataToTerraform(struct?: PodSecurityPolicyMetadataOutputReference | PodSecurityPolicyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class PodSecurityPolicyMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicyMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicyMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface PodSecurityPolicySpecAllowedFlexVolumes {
  /**
  * driver is the name of the Flexvolume driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#driver PodSecurityPolicy#driver}
  */
  readonly driver: string;
}

export function podSecurityPolicySpecAllowedFlexVolumesToTerraform(struct?: PodSecurityPolicySpecAllowedFlexVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
  }
}

export class PodSecurityPolicySpecAllowedFlexVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecAllowedFlexVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecAllowedFlexVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }
}

export class PodSecurityPolicySpecAllowedFlexVolumesList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecAllowedFlexVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecAllowedFlexVolumesOutputReference {
    return new PodSecurityPolicySpecAllowedFlexVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecAllowedHostPaths {
  /**
  * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#path_prefix PodSecurityPolicy#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#read_only PodSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function podSecurityPolicySpecAllowedHostPathsToTerraform(struct?: PodSecurityPolicySpecAllowedHostPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class PodSecurityPolicySpecAllowedHostPathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecAllowedHostPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecAllowedHostPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathPrefix = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pathPrefix = value.pathPrefix;
      this._readOnly = value.readOnly;
    }
  }

  // path_prefix - computed: false, optional: false, required: true
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class PodSecurityPolicySpecAllowedHostPathsList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecAllowedHostPaths[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecAllowedHostPathsOutputReference {
    return new PodSecurityPolicySpecAllowedHostPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecFsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecFsGroupRangeToTerraform(struct?: PodSecurityPolicySpecFsGroupRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class PodSecurityPolicySpecFsGroupRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecFsGroupRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecFsGroupRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class PodSecurityPolicySpecFsGroupRangeList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecFsGroupRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecFsGroupRangeOutputReference {
    return new PodSecurityPolicySpecFsGroupRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecFsGroup {
  /**
  * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecFsGroupRange[] | cdktf.IResolvable;
}

export function podSecurityPolicySpecFsGroupToTerraform(struct?: PodSecurityPolicySpecFsGroupOutputReference | PodSecurityPolicySpecFsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecFsGroupRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecFsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicySpecFsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecFsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._range.internalValue = value.range;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range = new PodSecurityPolicySpecFsGroupRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: PodSecurityPolicySpecFsGroupRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface PodSecurityPolicySpecHostPorts {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecHostPortsToTerraform(struct?: PodSecurityPolicySpecHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class PodSecurityPolicySpecHostPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecHostPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecHostPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class PodSecurityPolicySpecHostPortsList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecHostPorts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecHostPortsOutputReference {
    return new PodSecurityPolicySpecHostPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecRunAsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecRunAsGroupRangeToTerraform(struct?: PodSecurityPolicySpecRunAsGroupRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class PodSecurityPolicySpecRunAsGroupRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecRunAsGroupRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecRunAsGroupRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class PodSecurityPolicySpecRunAsGroupRangeList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecRunAsGroupRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecRunAsGroupRangeOutputReference {
    return new PodSecurityPolicySpecRunAsGroupRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecRunAsGroup {
  /**
  * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecRunAsGroupRange[] | cdktf.IResolvable;
}

export function podSecurityPolicySpecRunAsGroupToTerraform(struct?: PodSecurityPolicySpecRunAsGroupOutputReference | PodSecurityPolicySpecRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecRunAsGroupRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecRunAsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicySpecRunAsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecRunAsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._range.internalValue = value.range;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range = new PodSecurityPolicySpecRunAsGroupRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: PodSecurityPolicySpecRunAsGroupRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface PodSecurityPolicySpecRunAsUserRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecRunAsUserRangeToTerraform(struct?: PodSecurityPolicySpecRunAsUserRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class PodSecurityPolicySpecRunAsUserRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecRunAsUserRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecRunAsUserRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class PodSecurityPolicySpecRunAsUserRangeList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecRunAsUserRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecRunAsUserRangeOutputReference {
    return new PodSecurityPolicySpecRunAsUserRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecRunAsUser {
  /**
  * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecRunAsUserRange[] | cdktf.IResolvable;
}

export function podSecurityPolicySpecRunAsUserToTerraform(struct?: PodSecurityPolicySpecRunAsUserOutputReference | PodSecurityPolicySpecRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecRunAsUserRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecRunAsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicySpecRunAsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecRunAsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._range.internalValue = value.range;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range = new PodSecurityPolicySpecRunAsUserRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: PodSecurityPolicySpecRunAsUserRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface PodSecurityPolicySpecSeLinuxSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#level PodSecurityPolicy#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#role PodSecurityPolicy#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#type PodSecurityPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#user PodSecurityPolicy#user}
  */
  readonly user: string;
}

export function podSecurityPolicySpecSeLinuxSeLinuxOptionsToTerraform(struct?: PodSecurityPolicySpecSeLinuxSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecSeLinuxSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecSeLinuxSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class PodSecurityPolicySpecSeLinuxSeLinuxOptionsList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecSeLinuxSeLinuxOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference {
    return new PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecSeLinux {
  /**
  * rule is the strategy that will dictate the allowable labels that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#se_linux_options PodSecurityPolicy#se_linux_options}
  */
  readonly seLinuxOptions?: PodSecurityPolicySpecSeLinuxSeLinuxOptions[] | cdktf.IResolvable;
}

export function podSecurityPolicySpecSeLinuxToTerraform(struct?: PodSecurityPolicySpecSeLinuxOutputReference | PodSecurityPolicySpecSeLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    se_linux_options: cdktf.listMapper(podSecurityPolicySpecSeLinuxSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export class PodSecurityPolicySpecSeLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicySpecSeLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecSeLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._seLinuxOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new PodSecurityPolicySpecSeLinuxSeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: PodSecurityPolicySpecSeLinuxSeLinuxOptions[] | cdktf.IResolvable) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }
}
export interface PodSecurityPolicySpecSupplementalGroupsRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

export function podSecurityPolicySpecSupplementalGroupsRangeToTerraform(struct?: PodSecurityPolicySpecSupplementalGroupsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export class PodSecurityPolicySpecSupplementalGroupsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PodSecurityPolicySpecSupplementalGroupsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecSupplementalGroupsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class PodSecurityPolicySpecSupplementalGroupsRangeList extends cdktf.ComplexList {
  public internalValue? : PodSecurityPolicySpecSupplementalGroupsRange[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PodSecurityPolicySpecSupplementalGroupsRangeOutputReference {
    return new PodSecurityPolicySpecSupplementalGroupsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PodSecurityPolicySpecSupplementalGroups {
  /**
  * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecSupplementalGroupsRange[] | cdktf.IResolvable;
}

export function podSecurityPolicySpecSupplementalGroupsToTerraform(struct?: PodSecurityPolicySpecSupplementalGroupsOutputReference | PodSecurityPolicySpecSupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecSupplementalGroupsRangeToTerraform)(struct!.range),
  }
}

export class PodSecurityPolicySpecSupplementalGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicySpecSupplementalGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpecSupplementalGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._range.internalValue = value.range;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // range - computed: false, optional: true, required: false
  private _range = new PodSecurityPolicySpecSupplementalGroupsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: PodSecurityPolicySpecSupplementalGroupsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface PodSecurityPolicySpec {
  /**
  * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_capabilities PodSecurityPolicy#allowed_capabilities}
  */
  readonly allowedCapabilities?: string[];
  /**
  * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}
  */
  readonly allowedProcMountTypes?: string[];
  /**
  * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#default_add_capabilities PodSecurityPolicy#default_add_capabilities}
  */
  readonly defaultAddCapabilities?: string[];
  /**
  * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}
  */
  readonly defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}
  */
  readonly forbiddenSysctls?: string[];
  /**
  * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_ipc PodSecurityPolicy#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_network PodSecurityPolicy#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * hostPID determines if the policy allows the use of HostPID in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_pid PodSecurityPolicy#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * privileged determines if a pod can request to be run as privileged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#privileged PodSecurityPolicy#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}
  */
  readonly requiredDropCapabilities?: string[];
  /**
  * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#volumes PodSecurityPolicy#volumes}
  */
  readonly volumes?: string[];
  /**
  * allowed_flex_volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}
  */
  readonly allowedFlexVolumes?: PodSecurityPolicySpecAllowedFlexVolumes[] | cdktf.IResolvable;
  /**
  * allowed_host_paths block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_host_paths PodSecurityPolicy#allowed_host_paths}
  */
  readonly allowedHostPaths?: PodSecurityPolicySpecAllowedHostPaths[] | cdktf.IResolvable;
  /**
  * fs_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#fs_group PodSecurityPolicy#fs_group}
  */
  readonly fsGroup: PodSecurityPolicySpecFsGroup;
  /**
  * host_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_ports PodSecurityPolicy#host_ports}
  */
  readonly hostPorts?: PodSecurityPolicySpecHostPorts[] | cdktf.IResolvable;
  /**
  * run_as_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#run_as_group PodSecurityPolicy#run_as_group}
  */
  readonly runAsGroup?: PodSecurityPolicySpecRunAsGroup;
  /**
  * run_as_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#run_as_user PodSecurityPolicy#run_as_user}
  */
  readonly runAsUser: PodSecurityPolicySpecRunAsUser;
  /**
  * se_linux block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#se_linux PodSecurityPolicy#se_linux}
  */
  readonly seLinux?: PodSecurityPolicySpecSeLinux;
  /**
  * supplemental_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#supplemental_groups PodSecurityPolicy#supplemental_groups}
  */
  readonly supplementalGroups: PodSecurityPolicySpecSupplementalGroups;
}

export function podSecurityPolicySpecToTerraform(struct?: PodSecurityPolicySpecOutputReference | PodSecurityPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    allowed_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCapabilities),
    allowed_proc_mount_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedProcMountTypes),
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedUnsafeSysctls),
    default_add_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.defaultAddCapabilities),
    default_allow_privilege_escalation: cdktf.booleanToTerraform(struct!.defaultAllowPrivilegeEscalation),
    forbidden_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.forbiddenSysctls),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    required_drop_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requiredDropCapabilities),
    volumes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.volumes),
    allowed_flex_volumes: cdktf.listMapper(podSecurityPolicySpecAllowedFlexVolumesToTerraform)(struct!.allowedFlexVolumes),
    allowed_host_paths: cdktf.listMapper(podSecurityPolicySpecAllowedHostPathsToTerraform)(struct!.allowedHostPaths),
    fs_group: podSecurityPolicySpecFsGroupToTerraform(struct!.fsGroup),
    host_ports: cdktf.listMapper(podSecurityPolicySpecHostPortsToTerraform)(struct!.hostPorts),
    run_as_group: podSecurityPolicySpecRunAsGroupToTerraform(struct!.runAsGroup),
    run_as_user: podSecurityPolicySpecRunAsUserToTerraform(struct!.runAsUser),
    se_linux: podSecurityPolicySpecSeLinuxToTerraform(struct!.seLinux),
    supplemental_groups: podSecurityPolicySpecSupplementalGroupsToTerraform(struct!.supplementalGroups),
  }
}

export class PodSecurityPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityPolicySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._allowedCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCapabilities = this._allowedCapabilities;
    }
    if (this._allowedProcMountTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProcMountTypes = this._allowedProcMountTypes;
    }
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._defaultAddCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAddCapabilities = this._defaultAddCapabilities;
    }
    if (this._defaultAllowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAllowPrivilegeEscalation = this._defaultAllowPrivilegeEscalation;
    }
    if (this._forbiddenSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenSysctls = this._forbiddenSysctls;
    }
    if (this._hostIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._requiredDropCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDropCapabilities = this._requiredDropCapabilities;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._allowedFlexVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFlexVolumes = this._allowedFlexVolumes?.internalValue;
    }
    if (this._allowedHostPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostPaths = this._allowedHostPaths?.internalValue;
    }
    if (this._fsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup?.internalValue;
    }
    if (this._hostPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPorts = this._hostPorts?.internalValue;
    }
    if (this._runAsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup?.internalValue;
    }
    if (this._runAsUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser?.internalValue;
    }
    if (this._seLinux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinux = this._seLinux?.internalValue;
    }
    if (this._supplementalGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityPolicySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation = undefined;
      this._allowedCapabilities = undefined;
      this._allowedProcMountTypes = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._defaultAddCapabilities = undefined;
      this._defaultAllowPrivilegeEscalation = undefined;
      this._forbiddenSysctls = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._requiredDropCapabilities = undefined;
      this._volumes = undefined;
      this._allowedFlexVolumes.internalValue = undefined;
      this._allowedHostPaths.internalValue = undefined;
      this._fsGroup.internalValue = undefined;
      this._hostPorts.internalValue = undefined;
      this._runAsGroup.internalValue = undefined;
      this._runAsUser.internalValue = undefined;
      this._seLinux.internalValue = undefined;
      this._supplementalGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._allowedCapabilities = value.allowedCapabilities;
      this._allowedProcMountTypes = value.allowedProcMountTypes;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._defaultAddCapabilities = value.defaultAddCapabilities;
      this._defaultAllowPrivilegeEscalation = value.defaultAllowPrivilegeEscalation;
      this._forbiddenSysctls = value.forbiddenSysctls;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._requiredDropCapabilities = value.requiredDropCapabilities;
      this._volumes = value.volumes;
      this._allowedFlexVolumes.internalValue = value.allowedFlexVolumes;
      this._allowedHostPaths.internalValue = value.allowedHostPaths;
      this._fsGroup.internalValue = value.fsGroup;
      this._hostPorts.internalValue = value.hostPorts;
      this._runAsGroup.internalValue = value.runAsGroup;
      this._runAsUser.internalValue = value.runAsUser;
      this._seLinux.internalValue = value.seLinux;
      this._supplementalGroups.internalValue = value.supplementalGroups;
    }
  }

  // allow_privilege_escalation - computed: true, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // allowed_capabilities - computed: true, optional: true, required: false
  private _allowedCapabilities?: string[]; 
  public get allowedCapabilities() {
    return this.getListAttribute('allowed_capabilities');
  }
  public set allowedCapabilities(value: string[]) {
    this._allowedCapabilities = value;
  }
  public resetAllowedCapabilities() {
    this._allowedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCapabilitiesInput() {
    return this._allowedCapabilities;
  }

  // allowed_proc_mount_types - computed: false, optional: true, required: false
  private _allowedProcMountTypes?: string[]; 
  public get allowedProcMountTypes() {
    return this.getListAttribute('allowed_proc_mount_types');
  }
  public set allowedProcMountTypes(value: string[]) {
    this._allowedProcMountTypes = value;
  }
  public resetAllowedProcMountTypes() {
    this._allowedProcMountTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProcMountTypesInput() {
    return this._allowedProcMountTypes;
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // default_add_capabilities - computed: false, optional: true, required: false
  private _defaultAddCapabilities?: string[]; 
  public get defaultAddCapabilities() {
    return this.getListAttribute('default_add_capabilities');
  }
  public set defaultAddCapabilities(value: string[]) {
    this._defaultAddCapabilities = value;
  }
  public resetDefaultAddCapabilities() {
    this._defaultAddCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddCapabilitiesInput() {
    return this._defaultAddCapabilities;
  }

  // default_allow_privilege_escalation - computed: true, optional: true, required: false
  private _defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get defaultAllowPrivilegeEscalation() {
    return this.getBooleanAttribute('default_allow_privilege_escalation');
  }
  public set defaultAllowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._defaultAllowPrivilegeEscalation = value;
  }
  public resetDefaultAllowPrivilegeEscalation() {
    this._defaultAllowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowPrivilegeEscalationInput() {
    return this._defaultAllowPrivilegeEscalation;
  }

  // forbidden_sysctls - computed: false, optional: true, required: false
  private _forbiddenSysctls?: string[]; 
  public get forbiddenSysctls() {
    return this.getListAttribute('forbidden_sysctls');
  }
  public set forbiddenSysctls(value: string[]) {
    this._forbiddenSysctls = value;
  }
  public resetForbiddenSysctls() {
    this._forbiddenSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenSysctlsInput() {
    return this._forbiddenSysctls;
  }

  // host_ipc - computed: true, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: true, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: true, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // privileged - computed: true, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: true, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // required_drop_capabilities - computed: true, optional: true, required: false
  private _requiredDropCapabilities?: string[]; 
  public get requiredDropCapabilities() {
    return this.getListAttribute('required_drop_capabilities');
  }
  public set requiredDropCapabilities(value: string[]) {
    this._requiredDropCapabilities = value;
  }
  public resetRequiredDropCapabilities() {
    this._requiredDropCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDropCapabilitiesInput() {
    return this._requiredDropCapabilities;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // allowed_flex_volumes - computed: false, optional: true, required: false
  private _allowedFlexVolumes = new PodSecurityPolicySpecAllowedFlexVolumesList(this, "allowed_flex_volumes", false);
  public get allowedFlexVolumes() {
    return this._allowedFlexVolumes;
  }
  public putAllowedFlexVolumes(value: PodSecurityPolicySpecAllowedFlexVolumes[] | cdktf.IResolvable) {
    this._allowedFlexVolumes.internalValue = value;
  }
  public resetAllowedFlexVolumes() {
    this._allowedFlexVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFlexVolumesInput() {
    return this._allowedFlexVolumes.internalValue;
  }

  // allowed_host_paths - computed: false, optional: true, required: false
  private _allowedHostPaths = new PodSecurityPolicySpecAllowedHostPathsList(this, "allowed_host_paths", false);
  public get allowedHostPaths() {
    return this._allowedHostPaths;
  }
  public putAllowedHostPaths(value: PodSecurityPolicySpecAllowedHostPaths[] | cdktf.IResolvable) {
    this._allowedHostPaths.internalValue = value;
  }
  public resetAllowedHostPaths() {
    this._allowedHostPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPathsInput() {
    return this._allowedHostPaths.internalValue;
  }

  // fs_group - computed: false, optional: false, required: true
  private _fsGroup = new PodSecurityPolicySpecFsGroupOutputReference(this, "fs_group");
  public get fsGroup() {
    return this._fsGroup;
  }
  public putFsGroup(value: PodSecurityPolicySpecFsGroup) {
    this._fsGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup.internalValue;
  }

  // host_ports - computed: false, optional: true, required: false
  private _hostPorts = new PodSecurityPolicySpecHostPortsList(this, "host_ports", false);
  public get hostPorts() {
    return this._hostPorts;
  }
  public putHostPorts(value: PodSecurityPolicySpecHostPorts[] | cdktf.IResolvable) {
    this._hostPorts.internalValue = value;
  }
  public resetHostPorts() {
    this._hostPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortsInput() {
    return this._hostPorts.internalValue;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup = new PodSecurityPolicySpecRunAsGroupOutputReference(this, "run_as_group");
  public get runAsGroup() {
    return this._runAsGroup;
  }
  public putRunAsGroup(value: PodSecurityPolicySpecRunAsGroup) {
    this._runAsGroup.internalValue = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup.internalValue;
  }

  // run_as_user - computed: false, optional: false, required: true
  private _runAsUser = new PodSecurityPolicySpecRunAsUserOutputReference(this, "run_as_user");
  public get runAsUser() {
    return this._runAsUser;
  }
  public putRunAsUser(value: PodSecurityPolicySpecRunAsUser) {
    this._runAsUser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser.internalValue;
  }

  // se_linux - computed: false, optional: true, required: false
  private _seLinux = new PodSecurityPolicySpecSeLinuxOutputReference(this, "se_linux");
  public get seLinux() {
    return this._seLinux;
  }
  public putSeLinux(value: PodSecurityPolicySpecSeLinux) {
    this._seLinux.internalValue = value;
  }
  public resetSeLinux() {
    this._seLinux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxInput() {
    return this._seLinux.internalValue;
  }

  // supplemental_groups - computed: false, optional: false, required: true
  private _supplementalGroups = new PodSecurityPolicySpecSupplementalGroupsOutputReference(this, "supplemental_groups");
  public get supplementalGroups() {
    return this._supplementalGroups;
  }
  public putSupplementalGroups(value: PodSecurityPolicySpecSupplementalGroups) {
    this._supplementalGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy kubernetes_pod_security_policy}
*/
export class PodSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_pod_security_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy kubernetes_pod_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PodSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.12.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new PodSecurityPolicyMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PodSecurityPolicyMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PodSecurityPolicySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PodSecurityPolicySpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: podSecurityPolicyMetadataToTerraform(this._metadata.internalValue),
      spec: podSecurityPolicySpecToTerraform(this._spec.internalValue),
    };
  }
}
