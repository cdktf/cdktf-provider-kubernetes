# `kubernetes_certificate_signing_request`

Refer to the Terraform Registory for docs: [`kubernetes_certificate_signing_request`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request).

# `certificateSigningRequest` Submodule <a name="`certificateSigningRequest` Submodule" id="@cdktf/provider-kubernetes.certificateSigningRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateSigningRequest <a name="CertificateSigningRequest" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request kubernetes_certificate_signing_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequest(Construct Scope, string Id, CertificateSigningRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig">CertificateSigningRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig">CertificateSigningRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetAutoApprove">ResetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata"></a>

```csharp
private void PutMetadata(CertificateSigningRequestMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec"></a>

```csharp
private void PutSpec(CertificateSigningRequestSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts"></a>

```csharp
private void PutTimeouts(CertificateSigningRequestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

---

##### `ResetAutoApprove` <a name="ResetAutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetAutoApprove"></a>

```csharp
private void ResetAutoApprove()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificateSigningRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

CertificateSigningRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

CertificateSigningRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

CertificateSigningRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

CertificateSigningRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CertificateSigningRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateSigningRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateSigningRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CertificateSigningRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference">CertificateSigningRequestMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference">CertificateSigningRequestSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference">CertificateSigningRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApproveInput">AutoApproveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApprove">AutoApprove</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadata"></a>

```csharp
public CertificateSigningRequestMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference">CertificateSigningRequestMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.spec"></a>

```csharp
public CertificateSigningRequestSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference">CertificateSigningRequestSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeouts"></a>

```csharp
public CertificateSigningRequestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference">CertificateSigningRequestTimeoutsOutputReference</a>

---

##### `AutoApproveInput`<sup>Optional</sup> <a name="AutoApproveInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApproveInput"></a>

```csharp
public object AutoApproveInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.metadataInput"></a>

```csharp
public CertificateSigningRequestMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.specInput"></a>

```csharp
public CertificateSigningRequestSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoApprove`<sup>Required</sup> <a name="AutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.autoApprove"></a>

```csharp
public object AutoApprove { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateSigningRequestConfig <a name="CertificateSigningRequestConfig" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CertificateSigningRequestMetadata Metadata,
    CertificateSigningRequestSpec Spec,
    object AutoApprove = null,
    string Id = null,
    CertificateSigningRequestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.autoApprove">AutoApprove</a></code> | <code>object</code> | Automatically approve the CertificateSigningRequest. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#id CertificateSigningRequest#id}. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.metadata"></a>

```csharp
public CertificateSigningRequestMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#metadata CertificateSigningRequest#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.spec"></a>

```csharp
public CertificateSigningRequestSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#spec CertificateSigningRequest#spec}

---

##### `AutoApprove`<sup>Optional</sup> <a name="AutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.autoApprove"></a>

```csharp
public object AutoApprove { get; set; }
```

- *Type:* object

Automatically approve the CertificateSigningRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#auto_approve CertificateSigningRequest#auto_approve}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#id CertificateSigningRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestConfig.property.timeouts"></a>

```csharp
public CertificateSigningRequestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts">CertificateSigningRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#timeouts CertificateSigningRequest#timeouts}

---

### CertificateSigningRequestMetadata <a name="CertificateSigningRequestMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.name">Name</a></code> | <code>string</code> | Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#annotations CertificateSigningRequest#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#generate_name CertificateSigningRequest#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#labels CertificateSigningRequest#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the certificate signing request, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#name CertificateSigningRequest#name}

---

### CertificateSigningRequestSpec <a name="CertificateSigningRequestSpec" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestSpec {
    string Request,
    string SignerName = null,
    string[] Usages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.request">Request</a></code> | <code>string</code> | Base64-encoded PKCS#10 CSR data. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.signerName">SignerName</a></code> | <code>string</code> | Requested signer for the request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.usages">Usages</a></code> | <code>string[]</code> | allowedUsages specifies a set of usage contexts the key will be valid for. See: 	https://tools.ietf.org/html/rfc5280#section-4.2.1.3 	https://tools.ietf.org/html/rfc5280#section-4.2.1.12. |

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

Base64-encoded PKCS#10 CSR data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#request CertificateSigningRequest#request}

---

##### `SignerName`<sup>Optional</sup> <a name="SignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.signerName"></a>

```csharp
public string SignerName { get; set; }
```

- *Type:* string

Requested signer for the request.

It is a qualified name in the form: `scope-hostname.io/name`.If empty, it will be defaulted: 1. If it's a kubelet client certificate, it is assigned `kubernetes.io/kube-apiserver-client-kubelet`.2. If it's a kubelet serving certificate, it is assigned `kubernetes.io/kubelet-serving`.3. Otherwise, it is assigned `kubernetes.io/legacy-unknown`. Distribution of trust for signers happens out of band.You can select on this field using `spec.signerName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#signer_name CertificateSigningRequest#signer_name}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec.property.usages"></a>

```csharp
public string[] Usages { get; set; }
```

- *Type:* string[]

allowedUsages specifies a set of usage contexts the key will be valid for. See: 	https://tools.ietf.org/html/rfc5280#section-4.2.1.3 	https://tools.ietf.org/html/rfc5280#section-4.2.1.12.

Valid values are:
"signing",
"digital signature",
"content commitment",
"key encipherment",
"key agreement",
"data encipherment",
"cert sign",
"crl sign",
"encipher only",
"decipher only",
"any",
"server auth",
"client auth",
"code signing",
"email protection",
"s/mime",
"ipsec end system",
"ipsec tunnel",
"ipsec user",
"timestamping",
"ocsp signing",
"microsoft sgc",
"netscape sgc"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#usages CertificateSigningRequest#usages}

---

### CertificateSigningRequestTimeouts <a name="CertificateSigningRequestTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#create CertificateSigningRequest#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/certificate_signing_request#create CertificateSigningRequest#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateSigningRequestMetadataOutputReference <a name="CertificateSigningRequestMetadataOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadataOutputReference.property.internalValue"></a>

```csharp
public CertificateSigningRequestMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestMetadata">CertificateSigningRequestMetadata</a>

---


### CertificateSigningRequestSpecOutputReference <a name="CertificateSigningRequestSpecOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetSignerName">ResetSignerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSignerName` <a name="ResetSignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetSignerName"></a>

```csharp
private void ResetSignerName()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.resetUsages"></a>

```csharp
private void ResetUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerNameInput">SignerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usagesInput">UsagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerName">SignerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `SignerNameInput`<sup>Optional</sup> <a name="SignerNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerNameInput"></a>

```csharp
public string SignerNameInput { get; }
```

- *Type:* string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usagesInput"></a>

```csharp
public string[] UsagesInput { get; }
```

- *Type:* string[]

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `SignerName`<sup>Required</sup> <a name="SignerName" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.signerName"></a>

```csharp
public string SignerName { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpecOutputReference.property.internalValue"></a>

```csharp
public CertificateSigningRequestSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestSpec">CertificateSigningRequestSpec</a>

---


### CertificateSigningRequestTimeoutsOutputReference <a name="CertificateSigningRequestTimeoutsOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new CertificateSigningRequestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequest.CertificateSigningRequestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



