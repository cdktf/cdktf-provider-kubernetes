# `kubernetes_horizontal_pod_autoscaler_v2beta2`

Refer to the Terraform Registory for docs: [`kubernetes_horizontal_pod_autoscaler_v2beta2`](https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2).

# `horizontalPodAutoscalerV2Beta2` Submodule <a name="`horizontalPodAutoscalerV2Beta2` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscalerV2Beta2 <a name="HorizontalPodAutoscalerV2Beta2" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2 kubernetes_horizontal_pod_autoscaler_v2beta2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2(Construct Scope, string Id, HorizontalPodAutoscalerV2Beta2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config">HorizontalPodAutoscalerV2Beta2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config">HorizontalPodAutoscalerV2Beta2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putMetadata"></a>

```csharp
private void PutMetadata(HorizontalPodAutoscalerV2Beta2Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putSpec"></a>

```csharp
private void PutSpec(HorizontalPodAutoscalerV2Beta2Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscalerV2Beta2.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscalerV2Beta2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscalerV2Beta2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference">HorizontalPodAutoscalerV2Beta2MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference">HorizontalPodAutoscalerV2Beta2SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadata"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference">HorizontalPodAutoscalerV2Beta2MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.spec"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference">HorizontalPodAutoscalerV2Beta2SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.metadataInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.specInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2Spec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerV2Beta2Config <a name="HorizontalPodAutoscalerV2Beta2Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    HorizontalPodAutoscalerV2Beta2Metadata Metadata,
    HorizontalPodAutoscalerV2Beta2Spec Spec,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#id HorizontalPodAutoscalerV2Beta2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.metadata"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metadata HorizontalPodAutoscalerV2Beta2#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.spec"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#spec HorizontalPodAutoscalerV2Beta2#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#id HorizontalPodAutoscalerV2Beta2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerV2Beta2Metadata <a name="HorizontalPodAutoscalerV2Beta2Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.name">Name</a></code> | <code>string</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#annotations HorizontalPodAutoscalerV2Beta2#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#generate_name HorizontalPodAutoscalerV2Beta2#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#labels HorizontalPodAutoscalerV2Beta2#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#namespace HorizontalPodAutoscalerV2Beta2#namespace}

---

### HorizontalPodAutoscalerV2Beta2Spec <a name="HorizontalPodAutoscalerV2Beta2Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2Spec {
    double MaxReplicas,
    HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef ScaleTargetRef,
    HorizontalPodAutoscalerV2Beta2SpecBehavior Behavior = null,
    object Metric = null,
    double MinReplicas = null,
    double TargetCpuUtilizationPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.behavior">Behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a></code> | behavior block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.minReplicas">MinReplicas</a></code> | <code>double</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>double</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#max_replicas HorizontalPodAutoscalerV2Beta2#max_replicas}

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.scaleTargetRef"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef ScaleTargetRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#scale_target_ref HorizontalPodAutoscalerV2Beta2#scale_target_ref}

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.behavior"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehavior Behavior { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#behavior HorizontalPodAutoscalerV2Beta2#behavior}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `MinReplicas`<sup>Optional</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.minReplicas"></a>

```csharp
public double MinReplicas { get; set; }
```

- *Type:* double

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#min_replicas HorizontalPodAutoscalerV2Beta2#min_replicas}

---

##### `TargetCpuUtilizationPercentage`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec.property.targetCpuUtilizationPercentage"></a>

```csharp
public double TargetCpuUtilizationPercentage { get; set; }
```

- *Type:* double

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target_cpu_utilization_percentage HorizontalPodAutoscalerV2Beta2#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerV2Beta2SpecBehavior <a name="HorizontalPodAutoscalerV2Beta2SpecBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehavior {
    object ScaleDown = null,
    object ScaleUp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleDown">ScaleDown</a></code> | <code>object</code> | scale_down block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleUp">ScaleUp</a></code> | <code>object</code> | scale_up block. |

---

##### `ScaleDown`<sup>Optional</sup> <a name="ScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleDown"></a>

```csharp
public object ScaleDown { get; set; }
```

- *Type:* object

scale_down block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#scale_down HorizontalPodAutoscalerV2Beta2#scale_down}

---

##### `ScaleUp`<sup>Optional</sup> <a name="ScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior.property.scaleUp"></a>

```csharp
public object ScaleUp { get; set; }
```

- *Type:* object

scale_up block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#scale_up HorizontalPodAutoscalerV2Beta2#scale_up}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown {
    object Policy,
    string SelectPolicy = null,
    double StabilizationWindowSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.policy">Policy</a></code> | <code>object</code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.policy"></a>

```csharp
public object Policy { get; set; }
```

- *Type:* object

policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#policy HorizontalPodAutoscalerV2Beta2#policy}

---

##### `SelectPolicy`<sup>Optional</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; set; }
```

- *Type:* string

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#select_policy HorizontalPodAutoscalerV2Beta2#select_policy}

---

##### `StabilizationWindowSeconds`<sup>Optional</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; set; }
```

- *Type:* double

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#stabilization_window_seconds HorizontalPodAutoscalerV2Beta2#stabilization_window_seconds}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy {
    double PeriodSeconds,
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.type">Type</a></code> | <code>string</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.value">Value</a></code> | <code>double</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#period_seconds HorizontalPodAutoscalerV2Beta2#period_seconds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp {
    object Policy,
    string SelectPolicy = null,
    double StabilizationWindowSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.policy">Policy</a></code> | <code>object</code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.policy"></a>

```csharp
public object Policy { get; set; }
```

- *Type:* object

policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#policy HorizontalPodAutoscalerV2Beta2#policy}

---

##### `SelectPolicy`<sup>Optional</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; set; }
```

- *Type:* string

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#select_policy HorizontalPodAutoscalerV2Beta2#select_policy}

---

##### `StabilizationWindowSeconds`<sup>Optional</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; set; }
```

- *Type:* double

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#stabilization_window_seconds HorizontalPodAutoscalerV2Beta2#stabilization_window_seconds}

---

### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy {
    double PeriodSeconds,
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.type">Type</a></code> | <code>string</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.value">Value</a></code> | <code>double</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#period_seconds HorizontalPodAutoscalerV2Beta2#period_seconds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetric {
    string Type,
    HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource ContainerResource = null,
    HorizontalPodAutoscalerV2Beta2SpecMetricExternal External = null,
    HorizontalPodAutoscalerV2Beta2SpecMetricObject Object = null,
    HorizontalPodAutoscalerV2Beta2SpecMetricPods Pods = null,
    HorizontalPodAutoscalerV2Beta2SpecMetricResource Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.type">Type</a></code> | <code>string</code> | type is the type of metric source. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.containerResource">ContainerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a></code> | container_resource block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.external">External</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a></code> | external block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.object">Object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a></code> | object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.pods">Pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a></code> | pods block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a></code> | resource block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type is the type of metric source.

It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `ContainerResource`<sup>Optional</sup> <a name="ContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.containerResource"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource ContainerResource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

container_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#container_resource HorizontalPodAutoscalerV2Beta2#container_resource}

---

##### `External`<sup>Optional</sup> <a name="External" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.external"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternal External { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

external block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#external HorizontalPodAutoscalerV2Beta2#external}

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.object"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObject Object { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#object HorizontalPodAutoscalerV2Beta2#object}

---

##### `Pods`<sup>Optional</sup> <a name="Pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.pods"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPods Pods { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

pods block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#pods HorizontalPodAutoscalerV2Beta2#pods}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetric.property.resource"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResource Resource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#resource HorizontalPodAutoscalerV2Beta2#resource}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource {
    string Container,
    string Name,
    HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.container">Container</a></code> | <code>string</code> | name of the container in the pods of the scaling target. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.name">Name</a></code> | <code>string</code> | name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a></code> | target block. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

name of the container in the pods of the scaling target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#container HorizontalPodAutoscalerV2Beta2#container}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name of the resource in question.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternal <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternal {
    HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric Metric,
    HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a></code> | target block. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric {
    string Name,
    object Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.name">Name</a></code> | <code>string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.selector">Selector</a></code> | <code>object</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObject <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObject {
    HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject DescribedObject,
    HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric Metric,
    HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.describedObject">DescribedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a></code> | described_object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a></code> | target block. |

---

##### `DescribedObject`<sup>Required</sup> <a name="DescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.describedObject"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject DescribedObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

described_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#described_object HorizontalPodAutoscalerV2Beta2#described_object}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject {
    string ApiVersion,
    string Kind,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.apiVersion">ApiVersion</a></code> | <code>string</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.kind">Kind</a></code> | <code>string</code> | Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.name">Name</a></code> | <code>string</code> | Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#api_version HorizontalPodAutoscalerV2Beta2#api_version}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#kind HorizontalPodAutoscalerV2Beta2#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric {
    string Name,
    object Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.name">Name</a></code> | <code>string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.selector">Selector</a></code> | <code>object</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPods <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPods {
    HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric Metric,
    HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a></code> | target block. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric {
    string Name,
    object Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.name">Name</a></code> | <code>string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.selector">Selector</a></code> | <code>object</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricResource <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricResource {
    string Name,
    HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.name">Name</a></code> | <code>string</code> | name is the name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a></code> | target block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the resource in question.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}

---

### HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}

---

### HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef <a name="HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef {
    string Kind,
    string Name,
    string ApiVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.kind">Kind</a></code> | <code>string</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.apiVersion">ApiVersion</a></code> | <code>string</code> | API version of the referent. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#kind HorizontalPodAutoscalerV2Beta2#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#api_version HorizontalPodAutoscalerV2Beta2#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerV2Beta2MetadataOutputReference <a name="HorizontalPodAutoscalerV2Beta2MetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2MetadataOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Metadata">HorizontalPodAutoscalerV2Beta2Metadata</a>

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleDown">PutScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleUp">PutScaleUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleDown">ResetScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleUp">ResetScaleUp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleDown` <a name="PutScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleDown"></a>

```csharp
private void PutScaleDown(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleDown.parameter.value"></a>

- *Type:* object

---

##### `PutScaleUp` <a name="PutScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleUp"></a>

```csharp
private void PutScaleUp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.putScaleUp.parameter.value"></a>

- *Type:* object

---

##### `ResetScaleDown` <a name="ResetScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleDown"></a>

```csharp
private void ResetScaleDown()
```

##### `ResetScaleUp` <a name="ResetScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.resetScaleUp"></a>

```csharp
private void ResetScaleUp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDown">ScaleDown</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUp">ScaleUp</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDownInput">ScaleDownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUpInput">ScaleUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleDown`<sup>Required</sup> <a name="ScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDown"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList ScaleDown { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList</a>

---

##### `ScaleUp`<sup>Required</sup> <a name="ScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUp"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList ScaleUp { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList</a>

---

##### `ScaleDownInput`<sup>Optional</sup> <a name="ScaleDownInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleDownInput"></a>

```csharp
public object ScaleDownInput { get; }
```

- *Type:* object

---

##### `ScaleUpInput`<sup>Optional</sup> <a name="ScaleUpInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.scaleUpInput"></a>

```csharp
public object ScaleUpInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehavior InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetSelectPolicy">ResetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds">ResetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.putPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetSelectPolicy` <a name="ResetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetSelectPolicy"></a>

```csharp
private void ResetSelectPolicy()
```

##### `ResetStabilizationWindowSeconds` <a name="ResetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds"></a>

```csharp
private void ResetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policyInput">PolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicyInput">SelectPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput">StabilizationWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policy"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.policyInput"></a>

```csharp
public object PolicyInput { get; }
```

- *Type:* object

---

##### `SelectPolicyInput`<sup>Optional</sup> <a name="SelectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicyInput"></a>

```csharp
public string SelectPolicyInput { get; }
```

- *Type:* string

---

##### `StabilizationWindowSecondsInput`<sup>Optional</sup> <a name="StabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput"></a>

```csharp
public double StabilizationWindowSecondsInput { get; }
```

- *Type:* double

---

##### `SelectPolicy`<sup>Required</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; }
```

- *Type:* string

---

##### `StabilizationWindowSeconds`<sup>Required</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetSelectPolicy">ResetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds">ResetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.putPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetSelectPolicy` <a name="ResetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetSelectPolicy"></a>

```csharp
private void ResetSelectPolicy()
```

##### `ResetStabilizationWindowSeconds` <a name="ResetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds"></a>

```csharp
private void ResetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policyInput">PolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicyInput">SelectPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput">StabilizationWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policy"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.policyInput"></a>

```csharp
public object PolicyInput { get; }
```

- *Type:* object

---

##### `SelectPolicyInput`<sup>Optional</sup> <a name="SelectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicyInput"></a>

```csharp
public string SelectPolicyInput { get; }
```

- *Type:* string

---

##### `StabilizationWindowSecondsInput`<sup>Optional</sup> <a name="StabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput"></a>

```csharp
public double StabilizationWindowSecondsInput { get; }
```

- *Type:* double

---

##### `SelectPolicy`<sup>Required</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; }
```

- *Type:* string

---

##### `StabilizationWindowSeconds`<sup>Required</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selector"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressions"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putMetric"></a>

```csharp
private void PutMetric(HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.metricInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric">HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget">HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selector"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressions"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putDescribedObject">PutDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDescribedObject` <a name="PutDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putDescribedObject"></a>

```csharp
private void PutDescribedObject(HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putDescribedObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putMetric"></a>

```csharp
private void PutMetric(HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObject">DescribedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObjectInput">DescribedObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribedObject`<sup>Required</sup> <a name="DescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObject"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference DescribedObject { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference</a>

---

##### `DescribedObjectInput`<sup>Optional</sup> <a name="DescribedObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.describedObjectInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject DescribedObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.metricInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric">HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget">HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putContainerResource">PutContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putExternal">PutExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putObject">PutObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putPods">PutPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetContainerResource">ResetContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetExternal">ResetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetPods">ResetPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerResource` <a name="PutContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putContainerResource"></a>

```csharp
private void PutContainerResource(HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putContainerResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

---

##### `PutExternal` <a name="PutExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putExternal"></a>

```csharp
private void PutExternal(HorizontalPodAutoscalerV2Beta2SpecMetricExternal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

---

##### `PutObject` <a name="PutObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putObject"></a>

```csharp
private void PutObject(HorizontalPodAutoscalerV2Beta2SpecMetricObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

---

##### `PutPods` <a name="PutPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putPods"></a>

```csharp
private void PutPods(HorizontalPodAutoscalerV2Beta2SpecMetricPods Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putPods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putResource"></a>

```csharp
private void PutResource(HorizontalPodAutoscalerV2Beta2SpecMetricResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

---

##### `ResetContainerResource` <a name="ResetContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetContainerResource"></a>

```csharp
private void ResetContainerResource()
```

##### `ResetExternal` <a name="ResetExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetExternal"></a>

```csharp
private void ResetExternal()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetPods` <a name="ResetPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetPods"></a>

```csharp
private void ResetPods()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResource">ContainerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.external">External</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.object">Object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.pods">Pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResourceInput">ContainerResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.externalInput">ExternalInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.objectInput">ObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.podsInput">PodsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resourceInput">ResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerResource`<sup>Required</sup> <a name="ContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResource"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference ContainerResource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResourceOutputReference</a>

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.external"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference External { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference</a>

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.object"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference Object { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference</a>

---

##### `Pods`<sup>Required</sup> <a name="Pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.pods"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference Pods { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resource"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference Resource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference</a>

---

##### `ContainerResourceInput`<sup>Optional</sup> <a name="ContainerResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.containerResourceInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource ContainerResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource">HorizontalPodAutoscalerV2Beta2SpecMetricContainerResource</a>

---

##### `ExternalInput`<sup>Optional</sup> <a name="ExternalInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.externalInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricExternal ExternalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricExternal">HorizontalPodAutoscalerV2Beta2SpecMetricExternal</a>

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.objectInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricObject ObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricObject">HorizontalPodAutoscalerV2Beta2SpecMetricObject</a>

---

##### `PodsInput`<sup>Optional</sup> <a name="PodsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.podsInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPods PodsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.resourceInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResource ResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selector"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.get"></a>

```csharp
private HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressions"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putMetric"></a>

```csharp
private void PutMetric(HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.metricInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric">HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPods InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPods">HorizontalPodAutoscalerV2Beta2SpecMetricPods</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget">HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResource">HorizontalPodAutoscalerV2Beta2SpecMetricResource</a>

---


### HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget">HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget</a>

---


### HorizontalPodAutoscalerV2Beta2SpecOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putBehavior">PutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putScaleTargetRef">PutScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMinReplicas">ResetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetTargetCpuUtilizationPercentage">ResetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBehavior` <a name="PutBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putBehavior"></a>

```csharp
private void PutBehavior(HorizontalPodAutoscalerV2Beta2SpecBehavior Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutScaleTargetRef` <a name="PutScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putScaleTargetRef"></a>

```csharp
private void PutScaleTargetRef(HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMinReplicas` <a name="ResetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetMinReplicas"></a>

```csharp
private void ResetMinReplicas()
```

##### `ResetTargetCpuUtilizationPercentage` <a name="ResetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```csharp
private void ResetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behavior">Behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference">HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList">HorizontalPodAutoscalerV2Beta2SpecMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRefInput">ScaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentageInput">TargetCpuUtilizationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicas">MinReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behavior"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference Behavior { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference">HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecMetricList">HorizontalPodAutoscalerV2Beta2SpecMetricList</a>

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRef"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference ScaleTargetRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.behaviorInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecBehavior BehaviorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecBehavior">HorizontalPodAutoscalerV2Beta2SpecBehavior</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicasInput"></a>

```csharp
public double MinReplicasInput { get; }
```

- *Type:* double

---

##### `ScaleTargetRefInput`<sup>Optional</sup> <a name="ScaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.scaleTargetRefInput"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef ScaleTargetRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

---

##### `TargetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```csharp
public double TargetCpuUtilizationPercentageInput { get; }
```

- *Type:* double

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.minReplicas"></a>

```csharp
public double MinReplicas { get; }
```

- *Type:* double

---

##### `TargetCpuUtilizationPercentage`<sup>Required</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```csharp
public double TargetCpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2Spec">HorizontalPodAutoscalerV2Beta2Spec</a>

---


### HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.resetApiVersion"></a>

```csharp
private void ResetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2Beta2.HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef">HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef</a>

---



