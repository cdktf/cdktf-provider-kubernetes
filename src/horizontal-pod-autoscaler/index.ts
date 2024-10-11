// https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HorizontalPodAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#metadata HorizontalPodAutoscaler#metadata}
  */
  readonly metadata: HorizontalPodAutoscalerMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#spec HorizontalPodAutoscaler#spec}
  */
  readonly spec: HorizontalPodAutoscalerSpec;
}
export interface HorizontalPodAutoscalerMetadata {
  /**
  * An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#annotations HorizontalPodAutoscaler#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#generate_name HorizontalPodAutoscaler#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#labels HorizontalPodAutoscaler#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the horizontal pod autoscaler must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#namespace HorizontalPodAutoscaler#namespace}
  */
  readonly namespace?: string;
}

export function horizontalPodAutoscalerMetadataToTerraform(struct?: HorizontalPodAutoscalerMetadataOutputReference | HorizontalPodAutoscalerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function horizontalPodAutoscalerMetadataToHclTerraform(struct?: HorizontalPodAutoscalerMetadataOutputReference | HorizontalPodAutoscalerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
export interface HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy {
  /**
  * Period specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Type is used to specify the scaling policy: Percent or Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * Value contains the amount of change which is permitted by the policy. It must be greater than zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value: number;
}

export function horizontalPodAutoscalerSpecBehaviorScaleDownPolicyToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecBehaviorScaleDownPolicyToHclTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodSeconds = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodSeconds = value.periodSeconds;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // period_seconds - computed: false, optional: false, required: true
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference {
    return new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecBehaviorScaleDown {
  /**
  * Used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * Number of seconds for which past recommendations should be considered while scaling up or scaling down. This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}
  */
  readonly policy: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecBehaviorScaleDownToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policy: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleDownPolicyToTerraform, true)(struct!.policy),
  }
}


export function horizontalPodAutoscalerSpecBehaviorScaleDownToHclTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    select_policy: {
      value: cdktf.stringToHclTerraform(struct!.selectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecBehaviorScaleDownPolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecBehaviorScaleDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPolicy = this._selectPolicy;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecBehaviorScaleDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectPolicy = undefined;
      this._stabilizationWindowSeconds = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectPolicy = value.selectPolicy;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
      this._policy.internalValue = value.policy;
    }
  }

  // select_policy - computed: false, optional: true, required: false
  private _selectPolicy?: string; 
  public get selectPolicy() {
    return this.getStringAttribute('select_policy');
  }
  public set selectPolicy(value: string) {
    this._selectPolicy = value;
  }
  public resetSelectPolicy() {
    this._selectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPolicyInput() {
    return this._selectPolicy;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class HorizontalPodAutoscalerSpecBehaviorScaleDownList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecBehaviorScaleDown[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference {
    return new HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy {
  /**
  * Period specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Type is used to specify the scaling policy: Percent or Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * Value contains the amount of change which is permitted by the policy. It must be greater than zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value: number;
}

export function horizontalPodAutoscalerSpecBehaviorScaleUpPolicyToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecBehaviorScaleUpPolicyToHclTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodSeconds = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodSeconds = value.periodSeconds;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // period_seconds - computed: false, optional: false, required: true
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference {
    return new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecBehaviorScaleUp {
  /**
  * Used to specify which policy should be used. If not set, the default value Max is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * Number of seconds for which past recommendations should be considered while scaling up or scaling down. This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}
  */
  readonly policy: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecBehaviorScaleUpToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policy: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleUpPolicyToTerraform, true)(struct!.policy),
  }
}


export function horizontalPodAutoscalerSpecBehaviorScaleUpToHclTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleUp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    select_policy: {
      value: cdktf.stringToHclTerraform(struct!.selectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecBehaviorScaleUpPolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecBehaviorScaleUp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPolicy = this._selectPolicy;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecBehaviorScaleUp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectPolicy = undefined;
      this._stabilizationWindowSeconds = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectPolicy = value.selectPolicy;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
      this._policy.internalValue = value.policy;
    }
  }

  // select_policy - computed: false, optional: true, required: false
  private _selectPolicy?: string; 
  public get selectPolicy() {
    return this.getStringAttribute('select_policy');
  }
  public set selectPolicy(value: string) {
    this._selectPolicy = value;
  }
  public resetSelectPolicy() {
    this._selectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPolicyInput() {
    return this._selectPolicy;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class HorizontalPodAutoscalerSpecBehaviorScaleUpList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecBehaviorScaleUp[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference {
    return new HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecBehavior {
  /**
  * scale_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#scale_down HorizontalPodAutoscaler#scale_down}
  */
  readonly scaleDown?: HorizontalPodAutoscalerSpecBehaviorScaleDown[] | cdktf.IResolvable;
  /**
  * scale_up block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#scale_up HorizontalPodAutoscaler#scale_up}
  */
  readonly scaleUp?: HorizontalPodAutoscalerSpecBehaviorScaleUp[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecBehaviorToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorOutputReference | HorizontalPodAutoscalerSpecBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleDownToTerraform, true)(struct!.scaleDown),
    scale_up: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleUpToTerraform, true)(struct!.scaleUp),
  }
}


export function horizontalPodAutoscalerSpecBehaviorToHclTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorOutputReference | HorizontalPodAutoscalerSpecBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_down: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecBehaviorScaleDownToHclTerraform, true)(struct!.scaleDown),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecBehaviorScaleDownList",
    },
    scale_up: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecBehaviorScaleUpToHclTerraform, true)(struct!.scaleUp),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecBehaviorScaleUpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDown = this._scaleDown?.internalValue;
    }
    if (this._scaleUp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUp = this._scaleUp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleDown.internalValue = undefined;
      this._scaleUp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleDown.internalValue = value.scaleDown;
      this._scaleUp.internalValue = value.scaleUp;
    }
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown = new HorizontalPodAutoscalerSpecBehaviorScaleDownList(this, "scale_down", false);
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: HorizontalPodAutoscalerSpecBehaviorScaleDown[] | cdktf.IResolvable) {
    this._scaleDown.internalValue = value;
  }
  public resetScaleDown() {
    this._scaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown.internalValue;
  }

  // scale_up - computed: false, optional: true, required: false
  private _scaleUp = new HorizontalPodAutoscalerSpecBehaviorScaleUpList(this, "scale_up", false);
  public get scaleUp() {
    return this._scaleUp;
  }
  public putScaleUp(value: HorizontalPodAutoscalerSpecBehaviorScaleUp[] | cdktf.IResolvable) {
    this._scaleUp.internalValue = value;
  }
  public resetScaleUp() {
    this._scaleUp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpInput() {
    return this._scaleUp.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricContainerResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricContainerResourceTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference | HorizontalPodAutoscalerSpecMetricContainerResourceTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecMetricContainerResourceTargetToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference | HorizontalPodAutoscalerSpecMetricContainerResourceTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricContainerResourceTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricContainerResourceTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricContainerResource {
  /**
  * name of the container in the pods of the scaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#container HorizontalPodAutoscaler#container}
  */
  readonly container: string;
  /**
  * name of the resource in question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricContainerResourceTarget;
}

export function horizontalPodAutoscalerSpecMetricContainerResourceToTerraform(struct?: HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference | HorizontalPodAutoscalerSpecMetricContainerResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: horizontalPodAutoscalerSpecMetricContainerResourceTargetToTerraform(struct!.target),
  }
}


export function horizontalPodAutoscalerSpecMetricContainerResourceToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference | HorizontalPodAutoscalerSpecMetricContainerResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: horizontalPodAutoscalerSpecMetricContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricContainerResourceTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricContainerResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricContainerResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricContainerResourceTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference {
    return new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecMetricExternalMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function horizontalPodAutoscalerSpecMetricExternalMetricSelectorToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternalMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternalMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetricExternalMetricSelector[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference {
    return new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecMetricExternalMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference | HorizontalPodAutoscalerSpecMetricExternalMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricSelectorToTerraform, true)(struct!.selector),
  }
}


export function horizontalPodAutoscalerSpecMetricExternalMetricToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference | HorizontalPodAutoscalerSpecMetricExternalMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricExternalMetricSelectorToHclTerraform, true)(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternalMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternalMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }
  public putSelector(value: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[] | cdktf.IResolvable) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricExternalTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference | HorizontalPodAutoscalerSpecMetricExternalTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecMetricExternalTargetToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference | HorizontalPodAutoscalerSpecMetricExternalTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternalTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternalTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternal {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricExternalMetric;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricExternalTarget;
}

export function horizontalPodAutoscalerSpecMetricExternalToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalOutputReference | HorizontalPodAutoscalerSpecMetricExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: horizontalPodAutoscalerSpecMetricExternalMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerSpecMetricExternalTargetToTerraform(struct!.target),
  }
}


export function horizontalPodAutoscalerSpecMetricExternalToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalOutputReference | HorizontalPodAutoscalerSpecMetricExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: horizontalPodAutoscalerSpecMetricExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricExternalMetricList",
    },
    target: {
      value: horizontalPodAutoscalerSpecMetricExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricExternalTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetricExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricExternalTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectDescribedObject {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
}

export function horizontalPodAutoscalerSpecMetricObjectDescribedObjectToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference | HorizontalPodAutoscalerSpecMetricObjectDescribedObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function horizontalPodAutoscalerSpecMetricObjectDescribedObjectToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference | HorizontalPodAutoscalerSpecMetricObjectDescribedObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectDescribedObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectDescribedObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference {
    return new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecMetricObjectMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function horizontalPodAutoscalerSpecMetricObjectMetricSelectorToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetricObjectMetricSelector[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference {
    return new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecMetricObjectMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference | HorizontalPodAutoscalerSpecMetricObjectMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricSelectorToTerraform, true)(struct!.selector),
  }
}


export function horizontalPodAutoscalerSpecMetricObjectMetricToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference | HorizontalPodAutoscalerSpecMetricObjectMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricObjectMetricSelectorToHclTerraform, true)(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }
  public putSelector(value: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[] | cdktf.IResolvable) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricObjectTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference | HorizontalPodAutoscalerSpecMetricObjectTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecMetricObjectTargetToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference | HorizontalPodAutoscalerSpecMetricObjectTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObject {
  /**
  * described_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#described_object HorizontalPodAutoscaler#described_object}
  */
  readonly describedObject: HorizontalPodAutoscalerSpecMetricObjectDescribedObject;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricObjectMetric;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricObjectTarget;
}

export function horizontalPodAutoscalerSpecMetricObjectToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectOutputReference | HorizontalPodAutoscalerSpecMetricObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: horizontalPodAutoscalerSpecMetricObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: horizontalPodAutoscalerSpecMetricObjectMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerSpecMetricObjectTargetToTerraform(struct!.target),
  }
}


export function horizontalPodAutoscalerSpecMetricObjectToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectOutputReference | HorizontalPodAutoscalerSpecMetricObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: horizontalPodAutoscalerSpecMetricObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricObjectDescribedObjectList",
    },
    metric: {
      value: horizontalPodAutoscalerSpecMetricObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricObjectMetricList",
    },
    target: {
      value: horizontalPodAutoscalerSpecMetricObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricObjectTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: HorizontalPodAutoscalerSpecMetricObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetricObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricObjectTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference {
    return new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecMetricPodsMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function horizontalPodAutoscalerSpecMetricPodsMetricSelectorToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPodsMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPodsMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetricPodsMetricSelector[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference {
    return new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[] | cdktf.IResolvable;
}

export function horizontalPodAutoscalerSpecMetricPodsMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference | HorizontalPodAutoscalerSpecMetricPodsMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricSelectorToTerraform, true)(struct!.selector),
  }
}


export function horizontalPodAutoscalerSpecMetricPodsMetricToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference | HorizontalPodAutoscalerSpecMetricPodsMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricPodsMetricSelectorToHclTerraform, true)(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPodsMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPodsMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }
  public putSelector(value: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[] | cdktf.IResolvable) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricPodsTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference | HorizontalPodAutoscalerSpecMetricPodsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecMetricPodsTargetToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference | HorizontalPodAutoscalerSpecMetricPodsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPodsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPodsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricPods {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricPodsMetric;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricPodsTarget;
}

export function horizontalPodAutoscalerSpecMetricPodsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsOutputReference | HorizontalPodAutoscalerSpecMetricPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: horizontalPodAutoscalerSpecMetricPodsMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerSpecMetricPodsTargetToTerraform(struct!.target),
  }
}


export function horizontalPodAutoscalerSpecMetricPodsToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsOutputReference | HorizontalPodAutoscalerSpecMetricPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: horizontalPodAutoscalerSpecMetricPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricPodsMetricList",
    },
    target: {
      value: horizontalPodAutoscalerSpecMetricPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricPodsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetricPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricPodsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricResourceTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference | HorizontalPodAutoscalerSpecMetricResourceTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function horizontalPodAutoscalerSpecMetricResourceTargetToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference | HorizontalPodAutoscalerSpecMetricResourceTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricResourceTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricResourceTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricResource {
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricResourceTarget;
}

export function horizontalPodAutoscalerSpecMetricResourceToTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceOutputReference | HorizontalPodAutoscalerSpecMetricResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: horizontalPodAutoscalerSpecMetricResourceTargetToTerraform(struct!.target),
  }
}


export function horizontalPodAutoscalerSpecMetricResourceToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceOutputReference | HorizontalPodAutoscalerSpecMetricResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: horizontalPodAutoscalerSpecMetricResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricResourceTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricResourceTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetric {
  /**
  * type is the type of metric source. It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * container_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#container_resource HorizontalPodAutoscaler#container_resource}
  */
  readonly containerResource?: HorizontalPodAutoscalerSpecMetricContainerResource;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#external HorizontalPodAutoscaler#external}
  */
  readonly external?: HorizontalPodAutoscalerSpecMetricExternal;
  /**
  * object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#object HorizontalPodAutoscaler#object}
  */
  readonly object?: HorizontalPodAutoscalerSpecMetricObject;
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#pods HorizontalPodAutoscaler#pods}
  */
  readonly pods?: HorizontalPodAutoscalerSpecMetricPods;
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#resource HorizontalPodAutoscaler#resource}
  */
  readonly resource?: HorizontalPodAutoscalerSpecMetricResource;
}

export function horizontalPodAutoscalerSpecMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    container_resource: horizontalPodAutoscalerSpecMetricContainerResourceToTerraform(struct!.containerResource),
    external: horizontalPodAutoscalerSpecMetricExternalToTerraform(struct!.external),
    object: horizontalPodAutoscalerSpecMetricObjectToTerraform(struct!.object),
    pods: horizontalPodAutoscalerSpecMetricPodsToTerraform(struct!.pods),
    resource: horizontalPodAutoscalerSpecMetricResourceToTerraform(struct!.resource),
  }
}


export function horizontalPodAutoscalerSpecMetricToHclTerraform(struct?: HorizontalPodAutoscalerSpecMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_resource: {
      value: horizontalPodAutoscalerSpecMetricContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricContainerResourceList",
    },
    external: {
      value: horizontalPodAutoscalerSpecMetricExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricExternalList",
    },
    object: {
      value: horizontalPodAutoscalerSpecMetricObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricObjectList",
    },
    pods: {
      value: horizontalPodAutoscalerSpecMetricPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricPodsList",
    },
    resource: {
      value: horizontalPodAutoscalerSpecMetricResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HorizontalPodAutoscalerSpecMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
    }
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

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: HorizontalPodAutoscalerSpecMetricContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new HorizontalPodAutoscalerSpecMetricExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: HorizontalPodAutoscalerSpecMetricExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new HorizontalPodAutoscalerSpecMetricObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: HorizontalPodAutoscalerSpecMetricObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new HorizontalPodAutoscalerSpecMetricPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: HorizontalPodAutoscalerSpecMetricPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new HorizontalPodAutoscalerSpecMetricResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: HorizontalPodAutoscalerSpecMetricResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class HorizontalPodAutoscalerSpecMetricList extends cdktf.ComplexList {
  public internalValue? : HorizontalPodAutoscalerSpecMetric[] | cdktf.IResolvable

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
  public get(index: number): HorizontalPodAutoscalerSpecMetricOutputReference {
    return new HorizontalPodAutoscalerSpecMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HorizontalPodAutoscalerSpecScaleTargetRef {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
}

export function horizontalPodAutoscalerSpecScaleTargetRefToTerraform(struct?: HorizontalPodAutoscalerSpecScaleTargetRefOutputReference | HorizontalPodAutoscalerSpecScaleTargetRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function horizontalPodAutoscalerSpecScaleTargetRefToHclTerraform(struct?: HorizontalPodAutoscalerSpecScaleTargetRefOutputReference | HorizontalPodAutoscalerSpecScaleTargetRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecScaleTargetRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecScaleTargetRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface HorizontalPodAutoscalerSpec {
  /**
  * Upper limit for the number of pods that can be set by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#max_replicas HorizontalPodAutoscaler#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#min_replicas HorizontalPodAutoscaler#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. If not specified the default autoscaling policy will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#target_cpu_utilization_percentage HorizontalPodAutoscaler#target_cpu_utilization_percentage}
  */
  readonly targetCpuUtilizationPercentage?: number;
  /**
  * behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#behavior HorizontalPodAutoscaler#behavior}
  */
  readonly behavior?: HorizontalPodAutoscalerSpecBehavior;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric?: HorizontalPodAutoscalerSpecMetric[] | cdktf.IResolvable;
  /**
  * scale_target_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#scale_target_ref HorizontalPodAutoscaler#scale_target_ref}
  */
  readonly scaleTargetRef: HorizontalPodAutoscalerSpecScaleTargetRef;
}

export function horizontalPodAutoscalerSpecToTerraform(struct?: HorizontalPodAutoscalerSpecOutputReference | HorizontalPodAutoscalerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_cpu_utilization_percentage: cdktf.numberToTerraform(struct!.targetCpuUtilizationPercentage),
    behavior: horizontalPodAutoscalerSpecBehaviorToTerraform(struct!.behavior),
    metric: cdktf.listMapper(horizontalPodAutoscalerSpecMetricToTerraform, true)(struct!.metric),
    scale_target_ref: horizontalPodAutoscalerSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}


export function horizontalPodAutoscalerSpecToHclTerraform(struct?: HorizontalPodAutoscalerSpecOutputReference | HorizontalPodAutoscalerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_cpu_utilization_percentage: {
      value: cdktf.numberToHclTerraform(struct!.targetCpuUtilizationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    behavior: {
      value: horizontalPodAutoscalerSpecBehaviorToHclTerraform(struct!.behavior),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecBehaviorList",
    },
    metric: {
      value: cdktf.listMapperHcl(horizontalPodAutoscalerSpecMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecMetricList",
    },
    scale_target_ref: {
      value: horizontalPodAutoscalerSpecScaleTargetRefToHclTerraform(struct!.scaleTargetRef),
      isBlock: true,
      type: "list",
      storageClassType: "HorizontalPodAutoscalerSpecScaleTargetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HorizontalPodAutoscalerSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HorizontalPodAutoscalerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._targetCpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCpuUtilizationPercentage = this._targetCpuUtilizationPercentage;
    }
    if (this._behavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._scaleTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetRef = this._scaleTargetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._targetCpuUtilizationPercentage = undefined;
      this._behavior.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._scaleTargetRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._targetCpuUtilizationPercentage = value.targetCpuUtilizationPercentage;
      this._behavior.internalValue = value.behavior;
      this._metric.internalValue = value.metric;
      this._scaleTargetRef.internalValue = value.scaleTargetRef;
    }
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // target_cpu_utilization_percentage - computed: true, optional: true, required: false
  private _targetCpuUtilizationPercentage?: number; 
  public get targetCpuUtilizationPercentage() {
    return this.getNumberAttribute('target_cpu_utilization_percentage');
  }
  public set targetCpuUtilizationPercentage(value: number) {
    this._targetCpuUtilizationPercentage = value;
  }
  public resetTargetCpuUtilizationPercentage() {
    this._targetCpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuUtilizationPercentageInput() {
    return this._targetCpuUtilizationPercentage;
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior = new HorizontalPodAutoscalerSpecBehaviorOutputReference(this, "behavior");
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: HorizontalPodAutoscalerSpecBehavior) {
    this._behavior.internalValue = value;
  }
  public resetBehavior() {
    this._behavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new HorizontalPodAutoscalerSpecMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // scale_target_ref - computed: false, optional: false, required: true
  private _scaleTargetRef = new HorizontalPodAutoscalerSpecScaleTargetRefOutputReference(this, "scale_target_ref");
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: HorizontalPodAutoscalerSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler kubernetes_horizontal_pod_autoscaler}
*/
export class HorizontalPodAutoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_horizontal_pod_autoscaler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HorizontalPodAutoscaler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HorizontalPodAutoscaler to import
  * @param importFromId The id of the existing HorizontalPodAutoscaler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HorizontalPodAutoscaler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_horizontal_pod_autoscaler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/horizontal_pod_autoscaler kubernetes_horizontal_pod_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HorizontalPodAutoscalerConfig
  */
  public constructor(scope: Construct, id: string, config: HorizontalPodAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_horizontal_pod_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.33.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
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
  private _metadata = new HorizontalPodAutoscalerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HorizontalPodAutoscalerMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new HorizontalPodAutoscalerSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: HorizontalPodAutoscalerSpec) {
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
      metadata: horizontalPodAutoscalerMetadataToTerraform(this._metadata.internalValue),
      spec: horizontalPodAutoscalerSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: horizontalPodAutoscalerMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HorizontalPodAutoscalerMetadataList",
      },
      spec: {
        value: horizontalPodAutoscalerSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HorizontalPodAutoscalerSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
